var app = require('../../app');
var request = require('supertest')(app);

describe('test/controllers/search.test.js', function () {
  it('should redirect to google search', function (done) {
    request.get('/search').query({q: 'airmind'})
      .expect(302)
      .end(function (err, res) {
        res.headers['location'].should.equal('https://www.google.com.hk/#hl=zh-CN&q=site:club.mindpx.net+airmind');
        done(err);
      });
  });
});
