import type { Schema, Attribute } from '@strapi/strapi';

export interface BookLesson extends Schema.Component {
  collectionName: 'components_component_lessons';
  info: {
    displayName: 'Lesson';
    description: '';
  };
  attributes: {
    Lesson_name: Attribute.String;
    Lesson_content: Attribute.RichText;
    Question_answer: Attribute.Component<'book.question-answer', true>;
    MCQ: Attribute.Component<'book.mcq', true>;
  };
}

export interface BookMcq extends Schema.Component {
  collectionName: 'components_component_mcqs';
  info: {
    displayName: 'MCQ';
    description: '';
  };
  attributes: {
    Question: Attribute.RichText;
    Option_a: Attribute.RichText;
    Option_b: Attribute.RichText;
    Option_c: Attribute.RichText;
    Option_d: Attribute.RichText;
    Correct_answer: Attribute.Enumeration<['a', 'b', 'c', 'd']>;
    Explanation: Attribute.RichText;
    mcq_level: Attribute.Relation<
      'book.mcq',
      'oneToOne',
      'api::mcq-level.mcq-level'
    >;
  };
}

export interface BookQuestionAnswer extends Schema.Component {
  collectionName: 'components_book_question_answers';
  info: {
    displayName: 'Question_answer';
    description: '';
  };
  attributes: {
    Question: Attribute.RichText;
    Answer: Attribute.RichText;
    qa_type: Attribute.Relation<
      'book.question-answer',
      'oneToOne',
      'api::qa-type.qa-type'
    >;
  };
}

export interface BookUnit extends Schema.Component {
  collectionName: 'components_book_units';
  info: {
    displayName: 'Unit';
  };
  attributes: {
    Unit_name: Attribute.String;
    Lesson: Attribute.Component<'book.lesson', true>;
  };
}

export interface ComponentAgainNew extends Schema.Component {
  collectionName: 'components_component_again_news';
  info: {
    displayName: 'Again_new';
  };
  attributes: {
    short: Attribute.String;
    againtitle: Attribute.String;
  };
}

export interface ComponentComponent1 extends Schema.Component {
  collectionName: 'components_component_component1s';
  info: {
    displayName: 'component1';
  };
  attributes: {
    Component1name: Attribute.String;
    About_component1: Attribute.String;
    Name: Attribute.Component<'component.newcomponentincomponent', true>;
  };
}

export interface ComponentNewcomponentincomponent extends Schema.Component {
  collectionName: 'components_component_newcomponentincomponents';
  info: {
    displayName: 'newcomponentincomponent';
  };
  attributes: {
    Again: Attribute.Component<'component.again-new', true>;
  };
}

export interface ComponentQuestionAnswer extends Schema.Component {
  collectionName: 'components_component_question_answers';
  info: {
    displayName: 'Question_answer1';
    description: '';
  };
  attributes: {
    MCQ: Attribute.Component<'book.mcq', true>;
    Name: Attribute.String;
  };
}

export interface DynaiczonecategoryDynamic1Displayname
  extends Schema.Component {
  collectionName: 'components_dynaiczonecategory_dynamic1displaynames';
  info: {
    displayName: 'Dynamic1displayname';
    description: '';
  };
  attributes: {
    Texttodynamic1: Attribute.String;
    Json: Attribute.JSON;
    Singlecomponent: Attribute.Component<'dynaiczonecategory.dynamiczonedisplayname'>;
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
      'book.lesson': BookLesson;
      'book.mcq': BookMcq;
      'book.question-answer': BookQuestionAnswer;
      'book.unit': BookUnit;
      'component.again-new': ComponentAgainNew;
      'component.component1': ComponentComponent1;
      'component.newcomponentincomponent': ComponentNewcomponentincomponent;
      'component.question-answer': ComponentQuestionAnswer;
      'dynaiczonecategory.dynamic1displayname': DynaiczonecategoryDynamic1Displayname;
      'dynaiczonecategory.dynamiczonedisplayname': DynaiczonecategoryDynamiczonedisplayname;
      'html.b-ook-html': HtmlBOokHtml;
      'html.sdfd': HtmlSdfd;
    }
  }
}
