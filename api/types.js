import { Db, Collection } from 'mongodb';
import { Request, Response } from 'express';
import http from 'http';
import https from 'https';

/**
 * @typedef {{
 * db_prop_name: string
 * func_body: string
 * }} AnaylyzeFuncResult
 */

/**
 * @typedef {{
 * getDB: (db_name: string) => Db
 * getCollection: (col_name: string) => Collection
 * anaylyzeFuncString: (functionString: string) => AnaylyzeFuncResult
 * }} MongoFunc
 */

/**
 * @typedef {{
 * mongo: MongoFunc, 
 * request: Request,
 * response: Response,
 * http: http,
 * https: https,
 * api_cache: {[api_name: string]: functionString},
 * }} API_CONTEXT
 */

/**
 * @typedef {{
 * ws: WebSocket
 * uuid: string
 * heartbeat: () => void
 * }} WebSocketObject
 */

/**
 * @typedef {{
 * mongo: MongoFunc
 * wsObj?: WebSocketObject
 * dict?: {[uuid:string]: WebSocketObject}
 * }} WebSocketContext
 */