import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentHtml extends Schema.Component {
  collectionName: 'components_html_htmls';
  info: {
    displayName: 'Lesson';
    description: '';
  };
  attributes: {
    Lesson_Name: Attribute.String;
    Content: Attribute.RichText;
  };
}

export interface DynaiczonecategoryDynamiczonedisplayname
  extends Schema.Component {
  collectionName: 'components_dynaiczonecategory_dynamiczonedisplaynames';
  info: {
    displayName: 'dynamiczonedisplayname';
  };
  attributes: {
    Title: Attribute.String;
    markdowm: Attribute.RichText;
  };
}

export interface HtmlBOokHtml extends Schema.Component {
  collectionName: 'components_html_b_ook_htmls';
  info: {
    displayName: 'BOok-html';
  };
  attributes: {};
}

export interface HtmlSdfd extends Schema.Component {
  collectionName: 'components_html_sdfds';
  info: {
    displayName: 'sdfd';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    markdowm: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.html': ComponentHtml;
      'dynaiczonecategory.dynamiczonedisplayname': DynaiczonecategoryDynamiczonedisplayname;
      'html.b-ook-html': HtmlBOokHtml;
      'html.sdfd': HtmlSdfd;
    }
  }
}
