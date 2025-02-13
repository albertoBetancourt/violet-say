#!/usr/bin/env node
const { sayMessage } = require('../src/index');

// Obtenemos el parámetro (por ejemplo, "vera") que se pasa en la línea de comandos.
const [,, dog] = process.argv;

// Si no se pasa parámetro, se usará "violeta" por defecto.
sayMessage(dog || 'violeta');