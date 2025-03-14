import { PrismaClient } from '@prisma/client';
const path = require("node:path");
const { Pool } = require("pg");
const express = require("express");
const bcrypt = require("bcryptjs")
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
require("dotenv").config();
const prisma = new PrismaClient();