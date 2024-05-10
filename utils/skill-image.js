
import bootstrap from '/public/svg/skills/bootstrap.svg';
import css from '/public/svg/skills/css.svg';
import docker from '/public/svg/skills/docker.svg';
import kubernetes from '/public/svg/skills/kubernetes.svg';
import figma from '/public/svg/skills/figma.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';
import node from '/public/svg/skills/nodejs.svg';
import express from '/public/svg/skills/express.svg';
import prisma from '/public/svg/skills/prisma.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'prisma':
      return prisma;
    case 'express js':
      return express;
    case 'node js':
      return node;  
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'kubernetes':
      return kubernetes;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'figma':
      return figma;
    default:
      break;
  }
}
