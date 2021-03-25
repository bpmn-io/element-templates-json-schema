export const template = [
  {
    'appliesTo': [
      'bpmn:ServiceTask'
    ],
    'description': 'foo',
    'id': '16319b98-513f-400e-b596-2944c7530d6c',
    'metadata': {
      'catalogOrganizationId': 'b810760f-167f-4b54-bd30-37cafcfdd08e',
      'created': 1616669450772,
      'tags': [
        'Walts Templates'
      ],
      'templateVersionId': '5e48cd6b-b4d3-419d-8e1a-d11dee88d400',
      'updated': 1616669450772
    },
    'name': 'New RPA template',
    'properties': [
      {
        'binding': {
          'name': 'bot',
          'type': 'camunda:property'
        },
        'editable': false,
        'label': 'UiPath Package Name',
        'type': 'String',
        'value': 'foo'
      },
      {
        'binding': {
          'name': 'camunda:asyncAfter',
          'type': 'property'
        },
        'type': 'Hidden',
        'value': 'true'
      },
      {
        'binding': {
          'name': 'camunda:type',
          'type': 'property'
        },
        'type': 'Hidden',
        'value': 'external'
      },
      {
        'binding': {
          'name': 'camunda:topic',
          'type': 'property'
        },
        'type': 'Hidden',
        'value': 'uipath'
      },
      {
        'binding': {
          'name': 'foo',
          'type': 'camunda:inputParameter'
        },
        'description': '<Description of the IN argument, e.g. expected format of the value>',
        'label': 'foo',
        'value': '${foo}'
      },
      {
        'binding': {
          'source': '${bar}',
          'type': 'camunda:outputParameter'
        },
        'description': '<Description of the OUT argument, e.g. format of the returned value>',
        'label': 'bar',
        'value': 'bar'
      },
      {
        'binding': {
          'errorRef': 'fd47d07f-8060-4b2d-b536-dc3ae15cfa19',
          'type': 'camunda:errorEventDefinition'
        },
        'label': 'my-error',
        'value': '${true}'
      }
    ],
    'scopes': [
      {
        'id': 'fd47d07f-8060-4b2d-b536-dc3ae15cfa19',
        'properties': [
          {
            'binding': {
              'name': 'errorCode',
              'type': 'property'
            },
            'label': 'Error Code',
            'type': 'Hidden',
            'value': '500'
          },
          {
            'binding': {
              'name': 'camunda:errorMessage',
              'type': 'property'
            },
            'label': 'Error Message',
            'type': 'Hidden',
            'value': 'custom error thrown'
          },
          {
            'binding': {
              'name': 'name',
              'type': 'property'
            },
            'label': 'Error Name',
            'type': 'Hidden',
            'value': 'my-error'
          }
        ],
        'type': 'bpmn:Error'
      }
    ],
    'version': 1616669450772
  },
  {
    'name': 'RPA Template v2',
    'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
    'id': '0a7096fb-47e8-4b4c-9da0-ecaee7af225e',
    'appliesTo': [
      'bpmn:ServiceTask',
      'bpmn:StartEvent'
    ],
    'properties': [
      {
        'label': 'Name',
        'type': 'String',
        'editable': false,
        'value': 'Bar',
        'binding': {
          'type': 'property',
          'name': 'name'
        }
      }
    ],
    'version': 946771200000,
    'metadata': {
      'templateVersionId': 'c74fee95-b75d-4d80-aa7d-c153dcc90cb8',
      'catalogOrganizationId': '82527756-ffbe-46bf-a27b-f12880878e77',
      'created': 946771200000,
      'updated': 946771200000,
      'tags': [
        "Walt's Catalog"
      ]
    }
  },
  {
    'name': 'RPA Template v1',
    'description': 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    'id': '0a7096fb-47e8-4b4c-9da0-ecaee7af225e',
    'appliesTo': [
      'bpmn:ServiceTask'
    ],
    'properties': [
      {
        'label': 'Name',
        'type': 'String',
        'editable': false,
        'value': 'Foo',
        'binding': {
          'type': 'property',
          'name': 'name'
        }
      }
    ],
    'version': 946684800000,
    'metadata': {
      'templateVersionId': 'df7d377e-e543-4d08-abd1-7014151b668f',
      'catalogOrganizationId': '82527756-ffbe-46bf-a27b-f12880878e77',
      'created': 946684800000,
      'updated': 946684800000,
      'tags': [
        "Walt's Catalog"
      ]
    }
  }
];

export const errors = null;