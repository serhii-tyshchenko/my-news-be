const rssController = require('./rss');
const parse = require('../parse');
const { transformData } = require('../common/utils');

jest.mock('../parse');
jest.mock('../common/utils');

describe('rssController.retrieve', () => {
  let req, res;

  beforeEach(() => {
    req = {
      query: {
        limit: 5,
        url: encodeURIComponent('http://example.com/rss'),
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  it('should return transformed data and count on success', async () => {
    const fakeItems = [{ title: 'a' }, { title: 'b' }];
    parse.mockResolvedValue({ items: fakeItems });
    transformData.mockReturnValue(['transformed']);

    await rssController.retrieve(req, res);

    expect(parse).toHaveBeenCalledWith('http://example.com/rss');
    expect(transformData).toHaveBeenCalledWith(fakeItems, 5);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: ['transformed'],
      count: 2,
    });
  });

  it('should handle missing response or items', async () => {
    parse.mockResolvedValue(null);

    await rssController.retrieve(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Failed to fetch RSS feed',
    });

    parse.mockResolvedValue({});
    await rssController.retrieve(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Failed to fetch RSS feed',
    });
  });

  it('should handle errors thrown in try block', async () => {
    const error = new Error('fail');
    parse.mockRejectedValue(error);

    // Mock console.error to suppress error output in test
    jest.spyOn(console, 'error').mockImplementation(() => {});

    await rssController.retrieve(req, res);

    expect(console.error).toHaveBeenCalledWith(error);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred' });

    console.error.mockRestore();
  });

  it('should decode the url from query', async () => {
    req.query.url = encodeURIComponent('http://test.com/feed');
    parse.mockResolvedValue({ items: [] });
    transformData.mockReturnValue([]);

    await rssController.retrieve(req, res);

    expect(parse).toHaveBeenCalledWith('http://test.com/feed');
  });
});
