import { Injectable } from '@nestjs/common';
import { algoliasearch } from 'algoliasearch';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!';
  }
  async getCollectionList(params?: string): Promise<any> {
    const APP_ID = 'MG1XDDDVEN'
    const API_KEY = '29ac67c9b7ad53c1dfa101a83ac86c30'
    const ALGOLIA_INDEX_NAME = 'fp_dev_products'
    const client = algoliasearch(APP_ID, API_KEY);
    const collectionHandle = params || 'injection-pump';
    const index = await client.searchSingleIndex({
      indexName: ALGOLIA_INDEX_NAME,
      searchParams: {
        query: '',
        facetFilters: [['collections:' + collectionHandle]],
        hitsPerPage: 50,
      },
    });
    return index;
  }
}