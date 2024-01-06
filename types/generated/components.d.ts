import type { Schema, Attribute } from '@strapi/strapi';

export interface BookAskedYear extends Schema.Component {
  collectionName: 'components_book_asked_years';
  info: {
    displayName: 'asked_year';
  };
  attributes: {
    Asked_year: Attribute.String;
  };
}

export interface BookLesson extends Schema.Component {
  collectionName: 'components_component_lessons';
  info: {
    displayName: 'Lesson';
    description: '';
  };
  attributes: {
    Lesson_name: Attribute.String;
    Lesson_content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Question_answer: Attribute.Component<'book.question-answer', true>;
    MCQ: Attribute.Component<'book.mcq', true>;
    video_url: Attribute.String;
  };
}

export interface BookMark extends Schema.Component {
  collectionName: 'components_book_marks';
  info: {
    displayName: 'Mark';
  };
  attributes: {
    Mark: Attribute.Decimal;
  };
}

export interface BookMcq extends Schema.Component {
  collectionName: 'components_component_mcqs';
  info: {
    displayName: 'MCQ';
    description: '';
  };
  attributes: {
    Question: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_a: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_b: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_c: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_d: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Correct_answer: Attribute.Enumeration<['a', 'b', 'c', 'd']>;
    Explanation: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Hardness_level: Attribute.Enumeration<
      ['Easier', 'Easy', 'Hard', 'Harder', 'Challenging']
    >;
    Category: Attribute.Enumeration<['Very short', 'Short', 'Long']>;
    Asked_year: Attribute.Component<'book.asked-year', true>;
  };
}

export interface BookQuestionAnswer extends Schema.Component {
  collectionName: 'components_book_question_answers';
  info: {
    displayName: 'Question_answer';
    description: '';
  };
  attributes: {
    Question: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Hardness_level: Attribute.Enumeration<['Easy', 'Medium', 'Hard']>;
    Category: Attribute.Enumeration<['Short', 'Medium', 'Long']>;
    Asked_year: Attribute.Component<'book.asked-year', true>;
    Marks: Attribute.Component<'book.mark', true>;
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

export interface JsonbookAskedYear extends Schema.Component {
  collectionName: 'components_jsonbook_asked_years';
  info: {
    displayName: 'asked_year';
  };
  attributes: {
    Asked_year: Attribute.String;
  };
}

export interface JsonbookLesson extends Schema.Component {
  collectionName: 'components_jsonbook_lessons';
  info: {
    displayName: 'Lesson';
    description: '';
  };
  attributes: {
    Lesson_name: Attribute.String;
    Lesson_content: Attribute.JSON;
    Question_answer: Attribute.Component<'jsonbook.question-answer', true>;
    MCQ: Attribute.Component<'jsonbook.mcq', true>;
    video_url: Attribute.String;
  };
}

export interface JsonbookMark extends Schema.Component {
  collectionName: 'components_jsonbook_marks';
  info: {
    displayName: 'Mark';
  };
  attributes: {
    Mark: Attribute.Decimal;
  };
}

export interface JsonbookMcq extends Schema.Component {
  collectionName: 'components_jsonbook_mcqs';
  info: {
    displayName: 'MCQ';
    description: '';
  };
  attributes: {
    Question: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_a: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_b: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_c: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Option_d: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Correct_answer: Attribute.Enumeration<['a', 'b', 'c', 'd']>;
    Explanation: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Hardness_level: Attribute.Enumeration<
      ['Easier', 'Easy', 'Hard', 'Harder', 'Challenging']
    >;
    Category: Attribute.Enumeration<['Very short', 'Short', 'Long']>;
    Asked_year: Attribute.Component<'jsonbook.asked-year', true>;
  };
}

export interface JsonbookQuestionAnswer extends Schema.Component {
  collectionName: 'components_jsonbook_question_answers';
  info: {
    displayName: 'Question_answer';
    description: '';
  };
  attributes: {
    Question: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    Hardness_level: Attribute.Enumeration<['Easy', 'Medium', 'Hard']>;
    Category: Attribute.Enumeration<['Short', 'Medium', 'Long']>;
    Asked_year: Attribute.Component<'jsonbook.asked-year', true>;
    Marks: Attribute.Component<'jsonbook.mark', true>;
  };
}

export interface JsonbookUnit extends Schema.Component {
  collectionName: 'components_jsonbook_units';
  info: {
    displayName: 'Unit';
  };
  attributes: {
    Unit_name: Attribute.String;
    Lesson: Attribute.Component<'jsonbook.lesson', true>;
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
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
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

export interface SyllabusReference extends Schema.Component {
  collectionName: 'components_syllabus_references';
  info: {
    displayName: 'Reference';
  };
  attributes: {
    Reference: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'book.asked-year': BookAskedYear;
      'book.lesson': BookLesson;
      'book.mark': BookMark;
      'book.mcq': BookMcq;
      'book.question-answer': BookQuestionAnswer;
      'book.unit': BookUnit;
      'jsonbook.asked-year': JsonbookAskedYear;
      'jsonbook.lesson': JsonbookLesson;
      'jsonbook.mark': JsonbookMark;
      'jsonbook.mcq': JsonbookMcq;
      'jsonbook.question-answer': JsonbookQuestionAnswer;
      'jsonbook.unit': JsonbookUnit;
      'practical.picture': PracticalPicture;
      'practical.unit': PracticalUnit;
      'syllabus.reference': SyllabusReference;
    }
  }
}
