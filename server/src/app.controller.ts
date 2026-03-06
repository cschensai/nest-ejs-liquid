import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 路由
  @Get('hello')
  // 渲染文件
  @Render('hello')
  getHello(@Res() res: Response) {
    res.header('Content-Type', 'application/liquid');
    return { message: this.appService.getHello() };
  }

  @Get('health')
  getHealth(): { status: string } {
    return { status: 'ok' };
  }

  @Get('collections/:params')
  @Render('collection-list') // 调试数据注释掉
  async getCollectionList(
    @Param('params') params: string,
    @Res() res: Response, // 调试数据注释掉
  ): Promise<{ collections: any }> {
    const _collections = await this.appService.getCollectionList(params);
    res.setHeader('Content-Type', 'application/liquid'); // 调试数据注释掉
    return { collections: _collections.hits }
  }
}
