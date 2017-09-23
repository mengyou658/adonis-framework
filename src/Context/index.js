'use strict'

/*
 * adonis-framework
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const Macroable = require('macroable')

/**
 * An instance of this class is passed to all route handlers
 * and middleware. Also different part of applications
 * can bind getters to this class.
 *
 * @binding Adonis/Src/HttpContext
 * @alias HttpContext
 * @group Http
 *
 * @class Context
 * @constructor
 *
 * @example
 * ```js
 * const Context = use('Context')
 *
 * Context.getter('view', function () {
 *   return new View()
 * }, true)
 *
 * // The last option `true` means the getter is singleton.
 * ```
 */
class Context extends Macroable {
  constructor (req, res) {
    super()

    /**
     * Node.js http server req object
     *
     * @attribute req
     *
     * @type {Object}
     */
    this.req = req

    /**
     * Node.js http server res object
     *
     * @attribute res
     *
     * @type {Object}
     */
    this.res = res
  }
}

/**
 * Defining _macros and _getters property
 * for Macroable class
 *
 * @type {Object}
 */
Context._macros = {}
Context._getters = {}

module.exports = Context
