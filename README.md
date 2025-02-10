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

$ gendiff -f plain __fixtures__/file1.json __fixtures__/file2.yaml

$ gendiff __fixtures__/file1.json __fixtures__/file2.yaml
```