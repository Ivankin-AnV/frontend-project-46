### Hexlet tests and linter status:
[![Actions Status](https://github.com/Ivankin-AnV/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Ivankin-AnV/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/d2839414444114ad3432/maintainability)](https://codeclimate.com/github/Ivankin-AnV/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/d2839414444114ad3432/test_coverage)](https://codeclimate.com/github/Ivankin-AnV/frontend-project-46/test_coverage)

## Вычислитель отличий
Данный проект представляет собой консольную утилиту для сравнения двух объектов. Объекты считываются только из файлов форматов JSON, YML и YAML.

# Пример работы

[![asciicast](https://asciinema.org/a/xuX8nGI8Z6If1bRalGrFzaZCU.svg)](https://asciinema.org/a/xuX8nGI8Z6If1bRalGrFzaZCU)


## Установка

```
$ git clone git@github.com:Ivankin-AnV/frontend-project-46.git
$ cd frontend-project-46
$ make install
```
## Запуск

```
$ gendiff -h

Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```

```
$ gendiff __fixtures__/file1.json __fixtures__/file2.yaml

    {
        common: {
        + follow: false
            setting1: Value 1
        - setting2: 200
        - setting3: true
        + setting3: null
        + setting4: blah blah
        + setting5: {
                key5: value5
            }
            setting6: {
                doge: {
                - wow: 
                + wow: so much
                }
                key: value
            + ops: vops
            }
        }
        group1: {
        - baz: bas
        + baz: bars
            foo: bar
        - nest: {
                key: value
            }
        + nest: str
        }
    - group2: {
            abc: 12345
            deep: {
                id: 45
            }
        }
    + group3: {
            deep: {
                id: {
                    number: 45
                }
            }
            fee: 100500
        }
    }
```

```
$ gendiff -f plain __fixtures__/file1.json __fixtures__/file2.yaml

    Property 'common.follow' was added with value: false
    Property 'common.setting2' was removed
    Property 'common.setting3' was updated. From true to null
    Property 'common.setting4' was added with value: 'blah blah'
    Property 'common.setting5' was added with value: [complex value]
    Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
    Property 'common.setting6.ops' was added with value: 'vops'
    Property 'group1.baz' was updated. From 'bas' to 'bars'
    Property 'group1.nest' was updated. From [complex value] to 'str'
    Property 'group2' was removed
    Property 'group3' was added with value: [complex value]
```
