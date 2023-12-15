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
    Hardness_level: Attribute.Enumeration<
      ['Easier', 'Easy', 'Hard', 'Harder', 'Challenging']
    >;
    Category: Attribute.Enumeration<['Very short', 'Short', 'Long']>;
    Asked_year: Attribute.String;
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
    Hardness_level: Attribute.Enumeration<
      ['Easier', 'Easy', 'Hard', 'Harder', 'Challenging']
    >;
    Category: Attribute.Enumeration<['Very short', 'Short', 'Long']>;
    Asked_year: Attribute.String;
    Marks: Attribute.Integer;
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

export interface PracticalPicture extends Schema.Component {
  collectionName: 'components_practical_pictures';
  info: {
    displayName: 'Picture';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Picture: Attribute.Media;
    Description: Attribute.RichText;
  };
}

export interface PracticalUnit extends Schema.Component {
  collectionName: 'components_practical_units';
  info: {
    displayName: 'Unit';
  };
  attributes: {
    Name: Attribute.String;
    Topic: Attribute.Component<'practical.picture', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'book.lesson': BookLesson;
      'book.mcq': BookMcq;
      'book.question-answer': BookQuestionAnswer;
      'book.unit': BookUnit;
      'practical.picture': PracticalPicture;
      'practical.unit': PracticalUnit;
    }
  }
}
