export default function (plop) {
  plop.load('./.plop/actions/install-dependencies.js');

  plop.setGenerator('component', {
    description: 'A mindulle UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your singular component name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a short description of the purpose of this component.',
      },
      {
        type: 'input',
        name: 'type',
        message: 'What is the type of your component? (General|Navigation|Layout|Data Entry|Data Display|Utils)'
      }
    ],
    actions: [
      /*
       * Component package
       */
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/README.md',
        templateFile: '.plop/templates/component/README.md.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/package.json',
        templateFile: '.plop/templates/component/package.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/tsconfig.build.json',
        templateFile: '.plop/templates/component/tsconfig.build.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/stories/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop/templates/component/story.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/src/{{pascalCase name}}.tsx',
        templateFile: '.plop/templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/src/index.ts',
        templateFile: '.plop/templates/component/src-index.ts.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/src/styles/{{pascalCase name}}.module.css',
        templateFile: '.plop/templates/component/styles.css.hbs',
      },
      /*
       * Monorepo config
       */
      {
        path: 'tsconfig.json',
        pattern: /("paths": {)/g,
        template:
          '$1\n      "@mindulle-ui/{{dashCase name}}": ["./packages/{{dashCase name}}/src"],',
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: '"paths": {',
            closePatternStr: '    }',
            handleNonTrailingCommas: true,
          }),
      },
      /*
       * Core package integration
       */
      {
        path: 'packages/core/package.json',
        pattern: /("dependencies": {)/g,
        template: '$1\n    "@mindulle-ui/{{dashCase name}}": "workspace:~",',
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: '"dependencies": {',
            closePatternStr: '  },',
            handleNonTrailingCommas: true,
          }),
      },
      {
        path: 'packages/core/src/index.ts',
        pattern: /(plop start imports)/g,
        template: "$1\nexport * from '@mindulle-ui/{{dashCase name}}';",
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: 'plop start imports',
            closePatternStr: 'plop end imports',
          }),
      },
    ],
  });
};

const sortModification = (file, params) => {
  const { openPatternStr, closePatternStr, handleNonTrailingCommas } = params;
  const lines = file.split('\n');
  let listOpenIndex;
  let listCloseIndex;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (typeof listOpenIndex === 'number' && typeof listCloseIndex === 'number') {
      break;
    }

    if (typeof listOpenIndex === 'number' && line.includes(closePatternStr)) {
      listCloseIndex = i;
    }

    if (typeof listOpenIndex !== 'number') {
      if (line.includes(openPatternStr)) {
        listOpenIndex = i;
      }
    }
  }

  const startLines = lines.slice(0, listOpenIndex + 1);
  let pathsLines = lines.slice(listOpenIndex + 1, listCloseIndex).sort();

  if (handleNonTrailingCommas) {
    pathsLines = pathsLines
      .map((line) => line.replace(',', ''))
      .map((line, i) => (i === pathsLines.length - 1 ? `${line}` : `${line},`));
  }

  const endLines = lines.slice(listCloseIndex, lines.length);

  const updatedFile = [...startLines, ...pathsLines, ...endLines].join('\n');

  return updatedFile;
};