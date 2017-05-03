import KoaRouter from 'koa-router';
import TestFuncs from './helpers/testFuncs';

const router = KoaRouter();

router.get('/',
  async (ctx, next) => {
    const t = new TestFuncs(7);
    ctx.body = {
      test: t.mutiply(7)
    };
  });

export default router;
