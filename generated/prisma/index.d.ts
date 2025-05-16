
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model MfPortfolio
 * 
 */
export type MfPortfolio = $Result.DefaultSelection<Prisma.$MfPortfolioPayload>
/**
 * Model MfHolding
 * 
 */
export type MfHolding = $Result.DefaultSelection<Prisma.$MfHoldingPayload>
/**
 * Model StockPortfolio
 * 
 */
export type StockPortfolio = $Result.DefaultSelection<Prisma.$StockPortfolioPayload>
/**
 * Model StockHolding
 * 
 */
export type StockHolding = $Result.DefaultSelection<Prisma.$StockHoldingPayload>
/**
 * Model UserPortfolio
 * 
 */
export type UserPortfolio = $Result.DefaultSelection<Prisma.$UserPortfolioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssetType: {
  MF: 'MF',
  STOCK: 'STOCK',
  GOLD: 'GOLD'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]


export const TransactionType: {
  DEPOSIT: 'DEPOSIT',
  BUY: 'BUY',
  SELL: 'SELL'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const FundType: {
  EQUITY: 'EQUITY',
  DEBT: 'DEBT',
  HYBRID: 'HYBRID',
  OTHER: 'OTHER'
};

export type FundType = (typeof FundType)[keyof typeof FundType]


export const PortfolioType: {
  MF: 'MF',
  STOCK: 'STOCK',
  GOLD: 'GOLD'
};

export type PortfolioType = (typeof PortfolioType)[keyof typeof PortfolioType]

}

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type FundType = $Enums.FundType

export const FundType: typeof $Enums.FundType

export type PortfolioType = $Enums.PortfolioType

export const PortfolioType: typeof $Enums.PortfolioType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mfPortfolio`: Exposes CRUD operations for the **MfPortfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MfPortfolios
    * const mfPortfolios = await prisma.mfPortfolio.findMany()
    * ```
    */
  get mfPortfolio(): Prisma.MfPortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mfHolding`: Exposes CRUD operations for the **MfHolding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MfHoldings
    * const mfHoldings = await prisma.mfHolding.findMany()
    * ```
    */
  get mfHolding(): Prisma.MfHoldingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockPortfolio`: Exposes CRUD operations for the **StockPortfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockPortfolios
    * const stockPortfolios = await prisma.stockPortfolio.findMany()
    * ```
    */
  get stockPortfolio(): Prisma.StockPortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockHolding`: Exposes CRUD operations for the **StockHolding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockHoldings
    * const stockHoldings = await prisma.stockHolding.findMany()
    * ```
    */
  get stockHolding(): Prisma.StockHoldingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPortfolio`: Exposes CRUD operations for the **UserPortfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPortfolios
    * const userPortfolios = await prisma.userPortfolio.findMany()
    * ```
    */
  get userPortfolio(): Prisma.UserPortfolioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Transaction: 'Transaction',
    MfPortfolio: 'MfPortfolio',
    MfHolding: 'MfHolding',
    StockPortfolio: 'StockPortfolio',
    StockHolding: 'StockHolding',
    UserPortfolio: 'UserPortfolio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "transaction" | "mfPortfolio" | "mfHolding" | "stockPortfolio" | "stockHolding" | "userPortfolio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      MfPortfolio: {
        payload: Prisma.$MfPortfolioPayload<ExtArgs>
        fields: Prisma.MfPortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MfPortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MfPortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload>
          }
          findFirst: {
            args: Prisma.MfPortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MfPortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload>
          }
          findMany: {
            args: Prisma.MfPortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload>[]
          }
          create: {
            args: Prisma.MfPortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload>
          }
          createMany: {
            args: Prisma.MfPortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MfPortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload>
          }
          update: {
            args: Prisma.MfPortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload>
          }
          deleteMany: {
            args: Prisma.MfPortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MfPortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MfPortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfPortfolioPayload>
          }
          aggregate: {
            args: Prisma.MfPortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMfPortfolio>
          }
          groupBy: {
            args: Prisma.MfPortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MfPortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MfPortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<MfPortfolioCountAggregateOutputType> | number
          }
        }
      }
      MfHolding: {
        payload: Prisma.$MfHoldingPayload<ExtArgs>
        fields: Prisma.MfHoldingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MfHoldingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MfHoldingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload>
          }
          findFirst: {
            args: Prisma.MfHoldingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MfHoldingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload>
          }
          findMany: {
            args: Prisma.MfHoldingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload>[]
          }
          create: {
            args: Prisma.MfHoldingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload>
          }
          createMany: {
            args: Prisma.MfHoldingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MfHoldingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload>
          }
          update: {
            args: Prisma.MfHoldingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload>
          }
          deleteMany: {
            args: Prisma.MfHoldingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MfHoldingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MfHoldingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfHoldingPayload>
          }
          aggregate: {
            args: Prisma.MfHoldingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMfHolding>
          }
          groupBy: {
            args: Prisma.MfHoldingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MfHoldingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MfHoldingCountArgs<ExtArgs>
            result: $Utils.Optional<MfHoldingCountAggregateOutputType> | number
          }
        }
      }
      StockPortfolio: {
        payload: Prisma.$StockPortfolioPayload<ExtArgs>
        fields: Prisma.StockPortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockPortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockPortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload>
          }
          findFirst: {
            args: Prisma.StockPortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockPortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload>
          }
          findMany: {
            args: Prisma.StockPortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload>[]
          }
          create: {
            args: Prisma.StockPortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload>
          }
          createMany: {
            args: Prisma.StockPortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockPortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload>
          }
          update: {
            args: Prisma.StockPortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload>
          }
          deleteMany: {
            args: Prisma.StockPortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockPortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockPortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPortfolioPayload>
          }
          aggregate: {
            args: Prisma.StockPortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockPortfolio>
          }
          groupBy: {
            args: Prisma.StockPortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockPortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockPortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<StockPortfolioCountAggregateOutputType> | number
          }
        }
      }
      StockHolding: {
        payload: Prisma.$StockHoldingPayload<ExtArgs>
        fields: Prisma.StockHoldingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockHoldingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockHoldingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload>
          }
          findFirst: {
            args: Prisma.StockHoldingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockHoldingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload>
          }
          findMany: {
            args: Prisma.StockHoldingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload>[]
          }
          create: {
            args: Prisma.StockHoldingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload>
          }
          createMany: {
            args: Prisma.StockHoldingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockHoldingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload>
          }
          update: {
            args: Prisma.StockHoldingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload>
          }
          deleteMany: {
            args: Prisma.StockHoldingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockHoldingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockHoldingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHoldingPayload>
          }
          aggregate: {
            args: Prisma.StockHoldingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockHolding>
          }
          groupBy: {
            args: Prisma.StockHoldingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockHoldingGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockHoldingCountArgs<ExtArgs>
            result: $Utils.Optional<StockHoldingCountAggregateOutputType> | number
          }
        }
      }
      UserPortfolio: {
        payload: Prisma.$UserPortfolioPayload<ExtArgs>
        fields: Prisma.UserPortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload>
          }
          findFirst: {
            args: Prisma.UserPortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload>
          }
          findMany: {
            args: Prisma.UserPortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload>[]
          }
          create: {
            args: Prisma.UserPortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload>
          }
          createMany: {
            args: Prisma.UserPortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload>
          }
          update: {
            args: Prisma.UserPortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload>
          }
          deleteMany: {
            args: Prisma.UserPortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPortfolioPayload>
          }
          aggregate: {
            args: Prisma.UserPortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPortfolio>
          }
          groupBy: {
            args: Prisma.UserPortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<UserPortfolioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    transaction?: TransactionOmit
    mfPortfolio?: MfPortfolioOmit
    mfHolding?: MfHoldingOmit
    stockPortfolio?: StockPortfolioOmit
    stockHolding?: StockHoldingOmit
    userPortfolio?: UserPortfolioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
    mfPortfolio: number
    mfHolding: number
    stockPortfolio: number
    stockHoldings: number
    userPortfolio: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    mfPortfolio?: boolean | UserCountOutputTypeCountMfPortfolioArgs
    mfHolding?: boolean | UserCountOutputTypeCountMfHoldingArgs
    stockPortfolio?: boolean | UserCountOutputTypeCountStockPortfolioArgs
    stockHoldings?: boolean | UserCountOutputTypeCountStockHoldingsArgs
    userPortfolio?: boolean | UserCountOutputTypeCountUserPortfolioArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMfPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfPortfolioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMfHoldingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfHoldingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStockPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockPortfolioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStockHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockHoldingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPortfolioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    avatar: string | null
    balance: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    avatar: string | null
    balance: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isAdmin: number
    avatar: number
    balance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    avatar?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    avatar?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    avatar?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    isAdmin: boolean
    avatar: string | null
    balance: Decimal
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    avatar?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    mfPortfolio?: boolean | User$mfPortfolioArgs<ExtArgs>
    mfHolding?: boolean | User$mfHoldingArgs<ExtArgs>
    stockPortfolio?: boolean | User$stockPortfolioArgs<ExtArgs>
    stockHoldings?: boolean | User$stockHoldingsArgs<ExtArgs>
    userPortfolio?: boolean | User$userPortfolioArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    avatar?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "isAdmin" | "avatar" | "balance" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    mfPortfolio?: boolean | User$mfPortfolioArgs<ExtArgs>
    mfHolding?: boolean | User$mfHoldingArgs<ExtArgs>
    stockPortfolio?: boolean | User$stockPortfolioArgs<ExtArgs>
    stockHoldings?: boolean | User$stockHoldingsArgs<ExtArgs>
    userPortfolio?: boolean | User$userPortfolioArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      mfPortfolio: Prisma.$MfPortfolioPayload<ExtArgs>[]
      mfHolding: Prisma.$MfHoldingPayload<ExtArgs>[]
      stockPortfolio: Prisma.$StockPortfolioPayload<ExtArgs>[]
      stockHoldings: Prisma.$StockHoldingPayload<ExtArgs>[]
      userPortfolio: Prisma.$UserPortfolioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      isAdmin: boolean
      avatar: string | null
      balance: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mfPortfolio<T extends User$mfPortfolioArgs<ExtArgs> = {}>(args?: Subset<T, User$mfPortfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mfHolding<T extends User$mfHoldingArgs<ExtArgs> = {}>(args?: Subset<T, User$mfHoldingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockPortfolio<T extends User$stockPortfolioArgs<ExtArgs> = {}>(args?: Subset<T, User$stockPortfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockHoldings<T extends User$stockHoldingsArgs<ExtArgs> = {}>(args?: Subset<T, User$stockHoldingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPortfolio<T extends User$userPortfolioArgs<ExtArgs> = {}>(args?: Subset<T, User$userPortfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Decimal'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.mfPortfolio
   */
  export type User$mfPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    where?: MfPortfolioWhereInput
    orderBy?: MfPortfolioOrderByWithRelationInput | MfPortfolioOrderByWithRelationInput[]
    cursor?: MfPortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MfPortfolioScalarFieldEnum | MfPortfolioScalarFieldEnum[]
  }

  /**
   * User.mfHolding
   */
  export type User$mfHoldingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    where?: MfHoldingWhereInput
    orderBy?: MfHoldingOrderByWithRelationInput | MfHoldingOrderByWithRelationInput[]
    cursor?: MfHoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MfHoldingScalarFieldEnum | MfHoldingScalarFieldEnum[]
  }

  /**
   * User.stockPortfolio
   */
  export type User$stockPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    where?: StockPortfolioWhereInput
    orderBy?: StockPortfolioOrderByWithRelationInput | StockPortfolioOrderByWithRelationInput[]
    cursor?: StockPortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockPortfolioScalarFieldEnum | StockPortfolioScalarFieldEnum[]
  }

  /**
   * User.stockHoldings
   */
  export type User$stockHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    where?: StockHoldingWhereInput
    orderBy?: StockHoldingOrderByWithRelationInput | StockHoldingOrderByWithRelationInput[]
    cursor?: StockHoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockHoldingScalarFieldEnum | StockHoldingScalarFieldEnum[]
  }

  /**
   * User.userPortfolio
   */
  export type User$userPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    where?: UserPortfolioWhereInput
    orderBy?: UserPortfolioOrderByWithRelationInput | UserPortfolioOrderByWithRelationInput[]
    cursor?: UserPortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPortfolioScalarFieldEnum | UserPortfolioScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
    quantity: Decimal | null
    price: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
    quantity: Decimal | null
    price: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    assetType: $Enums.AssetType | null
    code: string | null
    name: string | null
    tnxType: $Enums.TransactionType | null
    quantity: Decimal | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    assetType: $Enums.AssetType | null
    code: string | null
    name: string | null
    tnxType: $Enums.TransactionType | null
    quantity: Decimal | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    assetType: number
    code: number
    name: number
    tnxType: number
    quantity: number
    price: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
    quantity?: true
    price?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
    quantity?: true
    price?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    assetType?: true
    code?: true
    name?: true
    tnxType?: true
    quantity?: true
    price?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    assetType?: true
    code?: true
    name?: true
    tnxType?: true
    quantity?: true
    price?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    assetType?: true
    code?: true
    name?: true
    tnxType?: true
    quantity?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    amount: Decimal
    assetType: $Enums.AssetType | null
    code: string | null
    name: string | null
    tnxType: $Enums.TransactionType
    quantity: Decimal | null
    price: Decimal | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    assetType?: boolean
    code?: boolean
    name?: boolean
    tnxType?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    assetType?: boolean
    code?: boolean
    name?: boolean
    tnxType?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "assetType" | "code" | "name" | "tnxType" | "quantity" | "price" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: Prisma.Decimal
      assetType: $Enums.AssetType | null
      code: string | null
      name: string | null
      tnxType: $Enums.TransactionType
      quantity: Prisma.Decimal | null
      price: Prisma.Decimal | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly assetType: FieldRef<"Transaction", 'AssetType'>
    readonly code: FieldRef<"Transaction", 'String'>
    readonly name: FieldRef<"Transaction", 'String'>
    readonly tnxType: FieldRef<"Transaction", 'TransactionType'>
    readonly quantity: FieldRef<"Transaction", 'Decimal'>
    readonly price: FieldRef<"Transaction", 'Decimal'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model MfPortfolio
   */

  export type AggregateMfPortfolio = {
    _count: MfPortfolioCountAggregateOutputType | null
    _avg: MfPortfolioAvgAggregateOutputType | null
    _sum: MfPortfolioSumAggregateOutputType | null
    _min: MfPortfolioMinAggregateOutputType | null
    _max: MfPortfolioMaxAggregateOutputType | null
  }

  export type MfPortfolioAvgAggregateOutputType = {
    latestNav: Decimal | null
    units: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
  }

  export type MfPortfolioSumAggregateOutputType = {
    latestNav: Decimal | null
    units: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
  }

  export type MfPortfolioMinAggregateOutputType = {
    id: string | null
    userId: string | null
    latestNav: Decimal | null
    fundCode: string | null
    fundName: string | null
    fundType: $Enums.FundType | null
    units: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MfPortfolioMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    latestNav: Decimal | null
    fundCode: string | null
    fundName: string | null
    fundType: $Enums.FundType | null
    units: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MfPortfolioCountAggregateOutputType = {
    id: number
    userId: number
    latestNav: number
    fundCode: number
    fundName: number
    fundType: number
    units: number
    investedAmt: number
    marketValue: number
    pnl: number
    roi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MfPortfolioAvgAggregateInputType = {
    latestNav?: true
    units?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
  }

  export type MfPortfolioSumAggregateInputType = {
    latestNav?: true
    units?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
  }

  export type MfPortfolioMinAggregateInputType = {
    id?: true
    userId?: true
    latestNav?: true
    fundCode?: true
    fundName?: true
    fundType?: true
    units?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MfPortfolioMaxAggregateInputType = {
    id?: true
    userId?: true
    latestNav?: true
    fundCode?: true
    fundName?: true
    fundType?: true
    units?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MfPortfolioCountAggregateInputType = {
    id?: true
    userId?: true
    latestNav?: true
    fundCode?: true
    fundName?: true
    fundType?: true
    units?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MfPortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfPortfolio to aggregate.
     */
    where?: MfPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfPortfolios to fetch.
     */
    orderBy?: MfPortfolioOrderByWithRelationInput | MfPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MfPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MfPortfolios
    **/
    _count?: true | MfPortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MfPortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MfPortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MfPortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MfPortfolioMaxAggregateInputType
  }

  export type GetMfPortfolioAggregateType<T extends MfPortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregateMfPortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMfPortfolio[P]>
      : GetScalarType<T[P], AggregateMfPortfolio[P]>
  }




  export type MfPortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfPortfolioWhereInput
    orderBy?: MfPortfolioOrderByWithAggregationInput | MfPortfolioOrderByWithAggregationInput[]
    by: MfPortfolioScalarFieldEnum[] | MfPortfolioScalarFieldEnum
    having?: MfPortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MfPortfolioCountAggregateInputType | true
    _avg?: MfPortfolioAvgAggregateInputType
    _sum?: MfPortfolioSumAggregateInputType
    _min?: MfPortfolioMinAggregateInputType
    _max?: MfPortfolioMaxAggregateInputType
  }

  export type MfPortfolioGroupByOutputType = {
    id: string
    userId: string
    latestNav: Decimal | null
    fundCode: string
    fundName: string
    fundType: $Enums.FundType
    units: Decimal
    investedAmt: Decimal
    marketValue: Decimal
    pnl: Decimal
    roi: Decimal
    createdAt: Date
    updatedAt: Date
    _count: MfPortfolioCountAggregateOutputType | null
    _avg: MfPortfolioAvgAggregateOutputType | null
    _sum: MfPortfolioSumAggregateOutputType | null
    _min: MfPortfolioMinAggregateOutputType | null
    _max: MfPortfolioMaxAggregateOutputType | null
  }

  type GetMfPortfolioGroupByPayload<T extends MfPortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MfPortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MfPortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MfPortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], MfPortfolioGroupByOutputType[P]>
        }
      >
    >


  export type MfPortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latestNav?: boolean
    fundCode?: boolean
    fundName?: boolean
    fundType?: boolean
    units?: boolean
    investedAmt?: boolean
    marketValue?: boolean
    pnl?: boolean
    roi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mfPortfolio"]>



  export type MfPortfolioSelectScalar = {
    id?: boolean
    userId?: boolean
    latestNav?: boolean
    fundCode?: boolean
    fundName?: boolean
    fundType?: boolean
    units?: boolean
    investedAmt?: boolean
    marketValue?: boolean
    pnl?: boolean
    roi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MfPortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "latestNav" | "fundCode" | "fundName" | "fundType" | "units" | "investedAmt" | "marketValue" | "pnl" | "roi" | "createdAt" | "updatedAt", ExtArgs["result"]["mfPortfolio"]>
  export type MfPortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MfPortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MfPortfolio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      latestNav: Prisma.Decimal | null
      fundCode: string
      fundName: string
      fundType: $Enums.FundType
      units: Prisma.Decimal
      investedAmt: Prisma.Decimal
      marketValue: Prisma.Decimal
      pnl: Prisma.Decimal
      roi: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mfPortfolio"]>
    composites: {}
  }

  type MfPortfolioGetPayload<S extends boolean | null | undefined | MfPortfolioDefaultArgs> = $Result.GetResult<Prisma.$MfPortfolioPayload, S>

  type MfPortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MfPortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MfPortfolioCountAggregateInputType | true
    }

  export interface MfPortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MfPortfolio'], meta: { name: 'MfPortfolio' } }
    /**
     * Find zero or one MfPortfolio that matches the filter.
     * @param {MfPortfolioFindUniqueArgs} args - Arguments to find a MfPortfolio
     * @example
     * // Get one MfPortfolio
     * const mfPortfolio = await prisma.mfPortfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MfPortfolioFindUniqueArgs>(args: SelectSubset<T, MfPortfolioFindUniqueArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MfPortfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MfPortfolioFindUniqueOrThrowArgs} args - Arguments to find a MfPortfolio
     * @example
     * // Get one MfPortfolio
     * const mfPortfolio = await prisma.mfPortfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MfPortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, MfPortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MfPortfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfPortfolioFindFirstArgs} args - Arguments to find a MfPortfolio
     * @example
     * // Get one MfPortfolio
     * const mfPortfolio = await prisma.mfPortfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MfPortfolioFindFirstArgs>(args?: SelectSubset<T, MfPortfolioFindFirstArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MfPortfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfPortfolioFindFirstOrThrowArgs} args - Arguments to find a MfPortfolio
     * @example
     * // Get one MfPortfolio
     * const mfPortfolio = await prisma.mfPortfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MfPortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, MfPortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MfPortfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfPortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MfPortfolios
     * const mfPortfolios = await prisma.mfPortfolio.findMany()
     * 
     * // Get first 10 MfPortfolios
     * const mfPortfolios = await prisma.mfPortfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mfPortfolioWithIdOnly = await prisma.mfPortfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MfPortfolioFindManyArgs>(args?: SelectSubset<T, MfPortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MfPortfolio.
     * @param {MfPortfolioCreateArgs} args - Arguments to create a MfPortfolio.
     * @example
     * // Create one MfPortfolio
     * const MfPortfolio = await prisma.mfPortfolio.create({
     *   data: {
     *     // ... data to create a MfPortfolio
     *   }
     * })
     * 
     */
    create<T extends MfPortfolioCreateArgs>(args: SelectSubset<T, MfPortfolioCreateArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MfPortfolios.
     * @param {MfPortfolioCreateManyArgs} args - Arguments to create many MfPortfolios.
     * @example
     * // Create many MfPortfolios
     * const mfPortfolio = await prisma.mfPortfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MfPortfolioCreateManyArgs>(args?: SelectSubset<T, MfPortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MfPortfolio.
     * @param {MfPortfolioDeleteArgs} args - Arguments to delete one MfPortfolio.
     * @example
     * // Delete one MfPortfolio
     * const MfPortfolio = await prisma.mfPortfolio.delete({
     *   where: {
     *     // ... filter to delete one MfPortfolio
     *   }
     * })
     * 
     */
    delete<T extends MfPortfolioDeleteArgs>(args: SelectSubset<T, MfPortfolioDeleteArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MfPortfolio.
     * @param {MfPortfolioUpdateArgs} args - Arguments to update one MfPortfolio.
     * @example
     * // Update one MfPortfolio
     * const mfPortfolio = await prisma.mfPortfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MfPortfolioUpdateArgs>(args: SelectSubset<T, MfPortfolioUpdateArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MfPortfolios.
     * @param {MfPortfolioDeleteManyArgs} args - Arguments to filter MfPortfolios to delete.
     * @example
     * // Delete a few MfPortfolios
     * const { count } = await prisma.mfPortfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MfPortfolioDeleteManyArgs>(args?: SelectSubset<T, MfPortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MfPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfPortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MfPortfolios
     * const mfPortfolio = await prisma.mfPortfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MfPortfolioUpdateManyArgs>(args: SelectSubset<T, MfPortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MfPortfolio.
     * @param {MfPortfolioUpsertArgs} args - Arguments to update or create a MfPortfolio.
     * @example
     * // Update or create a MfPortfolio
     * const mfPortfolio = await prisma.mfPortfolio.upsert({
     *   create: {
     *     // ... data to create a MfPortfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MfPortfolio we want to update
     *   }
     * })
     */
    upsert<T extends MfPortfolioUpsertArgs>(args: SelectSubset<T, MfPortfolioUpsertArgs<ExtArgs>>): Prisma__MfPortfolioClient<$Result.GetResult<Prisma.$MfPortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MfPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfPortfolioCountArgs} args - Arguments to filter MfPortfolios to count.
     * @example
     * // Count the number of MfPortfolios
     * const count = await prisma.mfPortfolio.count({
     *   where: {
     *     // ... the filter for the MfPortfolios we want to count
     *   }
     * })
    **/
    count<T extends MfPortfolioCountArgs>(
      args?: Subset<T, MfPortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MfPortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MfPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfPortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MfPortfolioAggregateArgs>(args: Subset<T, MfPortfolioAggregateArgs>): Prisma.PrismaPromise<GetMfPortfolioAggregateType<T>>

    /**
     * Group by MfPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfPortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MfPortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MfPortfolioGroupByArgs['orderBy'] }
        : { orderBy?: MfPortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MfPortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MfPortfolio model
   */
  readonly fields: MfPortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MfPortfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MfPortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MfPortfolio model
   */
  interface MfPortfolioFieldRefs {
    readonly id: FieldRef<"MfPortfolio", 'String'>
    readonly userId: FieldRef<"MfPortfolio", 'String'>
    readonly latestNav: FieldRef<"MfPortfolio", 'Decimal'>
    readonly fundCode: FieldRef<"MfPortfolio", 'String'>
    readonly fundName: FieldRef<"MfPortfolio", 'String'>
    readonly fundType: FieldRef<"MfPortfolio", 'FundType'>
    readonly units: FieldRef<"MfPortfolio", 'Decimal'>
    readonly investedAmt: FieldRef<"MfPortfolio", 'Decimal'>
    readonly marketValue: FieldRef<"MfPortfolio", 'Decimal'>
    readonly pnl: FieldRef<"MfPortfolio", 'Decimal'>
    readonly roi: FieldRef<"MfPortfolio", 'Decimal'>
    readonly createdAt: FieldRef<"MfPortfolio", 'DateTime'>
    readonly updatedAt: FieldRef<"MfPortfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MfPortfolio findUnique
   */
  export type MfPortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which MfPortfolio to fetch.
     */
    where: MfPortfolioWhereUniqueInput
  }

  /**
   * MfPortfolio findUniqueOrThrow
   */
  export type MfPortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which MfPortfolio to fetch.
     */
    where: MfPortfolioWhereUniqueInput
  }

  /**
   * MfPortfolio findFirst
   */
  export type MfPortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which MfPortfolio to fetch.
     */
    where?: MfPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfPortfolios to fetch.
     */
    orderBy?: MfPortfolioOrderByWithRelationInput | MfPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfPortfolios.
     */
    cursor?: MfPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfPortfolios.
     */
    distinct?: MfPortfolioScalarFieldEnum | MfPortfolioScalarFieldEnum[]
  }

  /**
   * MfPortfolio findFirstOrThrow
   */
  export type MfPortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which MfPortfolio to fetch.
     */
    where?: MfPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfPortfolios to fetch.
     */
    orderBy?: MfPortfolioOrderByWithRelationInput | MfPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfPortfolios.
     */
    cursor?: MfPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfPortfolios.
     */
    distinct?: MfPortfolioScalarFieldEnum | MfPortfolioScalarFieldEnum[]
  }

  /**
   * MfPortfolio findMany
   */
  export type MfPortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which MfPortfolios to fetch.
     */
    where?: MfPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfPortfolios to fetch.
     */
    orderBy?: MfPortfolioOrderByWithRelationInput | MfPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MfPortfolios.
     */
    cursor?: MfPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfPortfolios.
     */
    skip?: number
    distinct?: MfPortfolioScalarFieldEnum | MfPortfolioScalarFieldEnum[]
  }

  /**
   * MfPortfolio create
   */
  export type MfPortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a MfPortfolio.
     */
    data: XOR<MfPortfolioCreateInput, MfPortfolioUncheckedCreateInput>
  }

  /**
   * MfPortfolio createMany
   */
  export type MfPortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MfPortfolios.
     */
    data: MfPortfolioCreateManyInput | MfPortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MfPortfolio update
   */
  export type MfPortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a MfPortfolio.
     */
    data: XOR<MfPortfolioUpdateInput, MfPortfolioUncheckedUpdateInput>
    /**
     * Choose, which MfPortfolio to update.
     */
    where: MfPortfolioWhereUniqueInput
  }

  /**
   * MfPortfolio updateMany
   */
  export type MfPortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MfPortfolios.
     */
    data: XOR<MfPortfolioUpdateManyMutationInput, MfPortfolioUncheckedUpdateManyInput>
    /**
     * Filter which MfPortfolios to update
     */
    where?: MfPortfolioWhereInput
    /**
     * Limit how many MfPortfolios to update.
     */
    limit?: number
  }

  /**
   * MfPortfolio upsert
   */
  export type MfPortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the MfPortfolio to update in case it exists.
     */
    where: MfPortfolioWhereUniqueInput
    /**
     * In case the MfPortfolio found by the `where` argument doesn't exist, create a new MfPortfolio with this data.
     */
    create: XOR<MfPortfolioCreateInput, MfPortfolioUncheckedCreateInput>
    /**
     * In case the MfPortfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MfPortfolioUpdateInput, MfPortfolioUncheckedUpdateInput>
  }

  /**
   * MfPortfolio delete
   */
  export type MfPortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
    /**
     * Filter which MfPortfolio to delete.
     */
    where: MfPortfolioWhereUniqueInput
  }

  /**
   * MfPortfolio deleteMany
   */
  export type MfPortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfPortfolios to delete
     */
    where?: MfPortfolioWhereInput
    /**
     * Limit how many MfPortfolios to delete.
     */
    limit?: number
  }

  /**
   * MfPortfolio without action
   */
  export type MfPortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfPortfolio
     */
    select?: MfPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfPortfolio
     */
    omit?: MfPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfPortfolioInclude<ExtArgs> | null
  }


  /**
   * Model MfHolding
   */

  export type AggregateMfHolding = {
    _count: MfHoldingCountAggregateOutputType | null
    _avg: MfHoldingAvgAggregateOutputType | null
    _sum: MfHoldingSumAggregateOutputType | null
    _min: MfHoldingMinAggregateOutputType | null
    _max: MfHoldingMaxAggregateOutputType | null
  }

  export type MfHoldingAvgAggregateOutputType = {
    purchaseNav: Decimal | null
    units: Decimal | null
    amount: Decimal | null
  }

  export type MfHoldingSumAggregateOutputType = {
    purchaseNav: Decimal | null
    units: Decimal | null
    amount: Decimal | null
  }

  export type MfHoldingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fundCode: string | null
    fundName: string | null
    purchaseDate: Date | null
    purchaseNav: Decimal | null
    units: Decimal | null
    amount: Decimal | null
    updatedAt: Date | null
  }

  export type MfHoldingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fundCode: string | null
    fundName: string | null
    purchaseDate: Date | null
    purchaseNav: Decimal | null
    units: Decimal | null
    amount: Decimal | null
    updatedAt: Date | null
  }

  export type MfHoldingCountAggregateOutputType = {
    id: number
    userId: number
    fundCode: number
    fundName: number
    purchaseDate: number
    purchaseNav: number
    units: number
    amount: number
    updatedAt: number
    _all: number
  }


  export type MfHoldingAvgAggregateInputType = {
    purchaseNav?: true
    units?: true
    amount?: true
  }

  export type MfHoldingSumAggregateInputType = {
    purchaseNav?: true
    units?: true
    amount?: true
  }

  export type MfHoldingMinAggregateInputType = {
    id?: true
    userId?: true
    fundCode?: true
    fundName?: true
    purchaseDate?: true
    purchaseNav?: true
    units?: true
    amount?: true
    updatedAt?: true
  }

  export type MfHoldingMaxAggregateInputType = {
    id?: true
    userId?: true
    fundCode?: true
    fundName?: true
    purchaseDate?: true
    purchaseNav?: true
    units?: true
    amount?: true
    updatedAt?: true
  }

  export type MfHoldingCountAggregateInputType = {
    id?: true
    userId?: true
    fundCode?: true
    fundName?: true
    purchaseDate?: true
    purchaseNav?: true
    units?: true
    amount?: true
    updatedAt?: true
    _all?: true
  }

  export type MfHoldingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfHolding to aggregate.
     */
    where?: MfHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfHoldings to fetch.
     */
    orderBy?: MfHoldingOrderByWithRelationInput | MfHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MfHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MfHoldings
    **/
    _count?: true | MfHoldingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MfHoldingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MfHoldingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MfHoldingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MfHoldingMaxAggregateInputType
  }

  export type GetMfHoldingAggregateType<T extends MfHoldingAggregateArgs> = {
        [P in keyof T & keyof AggregateMfHolding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMfHolding[P]>
      : GetScalarType<T[P], AggregateMfHolding[P]>
  }




  export type MfHoldingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfHoldingWhereInput
    orderBy?: MfHoldingOrderByWithAggregationInput | MfHoldingOrderByWithAggregationInput[]
    by: MfHoldingScalarFieldEnum[] | MfHoldingScalarFieldEnum
    having?: MfHoldingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MfHoldingCountAggregateInputType | true
    _avg?: MfHoldingAvgAggregateInputType
    _sum?: MfHoldingSumAggregateInputType
    _min?: MfHoldingMinAggregateInputType
    _max?: MfHoldingMaxAggregateInputType
  }

  export type MfHoldingGroupByOutputType = {
    id: string
    userId: string
    fundCode: string
    fundName: string
    purchaseDate: Date
    purchaseNav: Decimal
    units: Decimal
    amount: Decimal
    updatedAt: Date
    _count: MfHoldingCountAggregateOutputType | null
    _avg: MfHoldingAvgAggregateOutputType | null
    _sum: MfHoldingSumAggregateOutputType | null
    _min: MfHoldingMinAggregateOutputType | null
    _max: MfHoldingMaxAggregateOutputType | null
  }

  type GetMfHoldingGroupByPayload<T extends MfHoldingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MfHoldingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MfHoldingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MfHoldingGroupByOutputType[P]>
            : GetScalarType<T[P], MfHoldingGroupByOutputType[P]>
        }
      >
    >


  export type MfHoldingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fundCode?: boolean
    fundName?: boolean
    purchaseDate?: boolean
    purchaseNav?: boolean
    units?: boolean
    amount?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mfHolding"]>



  export type MfHoldingSelectScalar = {
    id?: boolean
    userId?: boolean
    fundCode?: boolean
    fundName?: boolean
    purchaseDate?: boolean
    purchaseNav?: boolean
    units?: boolean
    amount?: boolean
    updatedAt?: boolean
  }

  export type MfHoldingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fundCode" | "fundName" | "purchaseDate" | "purchaseNav" | "units" | "amount" | "updatedAt", ExtArgs["result"]["mfHolding"]>
  export type MfHoldingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MfHoldingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MfHolding"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fundCode: string
      fundName: string
      purchaseDate: Date
      purchaseNav: Prisma.Decimal
      units: Prisma.Decimal
      amount: Prisma.Decimal
      updatedAt: Date
    }, ExtArgs["result"]["mfHolding"]>
    composites: {}
  }

  type MfHoldingGetPayload<S extends boolean | null | undefined | MfHoldingDefaultArgs> = $Result.GetResult<Prisma.$MfHoldingPayload, S>

  type MfHoldingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MfHoldingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MfHoldingCountAggregateInputType | true
    }

  export interface MfHoldingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MfHolding'], meta: { name: 'MfHolding' } }
    /**
     * Find zero or one MfHolding that matches the filter.
     * @param {MfHoldingFindUniqueArgs} args - Arguments to find a MfHolding
     * @example
     * // Get one MfHolding
     * const mfHolding = await prisma.mfHolding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MfHoldingFindUniqueArgs>(args: SelectSubset<T, MfHoldingFindUniqueArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MfHolding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MfHoldingFindUniqueOrThrowArgs} args - Arguments to find a MfHolding
     * @example
     * // Get one MfHolding
     * const mfHolding = await prisma.mfHolding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MfHoldingFindUniqueOrThrowArgs>(args: SelectSubset<T, MfHoldingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MfHolding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfHoldingFindFirstArgs} args - Arguments to find a MfHolding
     * @example
     * // Get one MfHolding
     * const mfHolding = await prisma.mfHolding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MfHoldingFindFirstArgs>(args?: SelectSubset<T, MfHoldingFindFirstArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MfHolding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfHoldingFindFirstOrThrowArgs} args - Arguments to find a MfHolding
     * @example
     * // Get one MfHolding
     * const mfHolding = await prisma.mfHolding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MfHoldingFindFirstOrThrowArgs>(args?: SelectSubset<T, MfHoldingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MfHoldings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfHoldingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MfHoldings
     * const mfHoldings = await prisma.mfHolding.findMany()
     * 
     * // Get first 10 MfHoldings
     * const mfHoldings = await prisma.mfHolding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mfHoldingWithIdOnly = await prisma.mfHolding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MfHoldingFindManyArgs>(args?: SelectSubset<T, MfHoldingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MfHolding.
     * @param {MfHoldingCreateArgs} args - Arguments to create a MfHolding.
     * @example
     * // Create one MfHolding
     * const MfHolding = await prisma.mfHolding.create({
     *   data: {
     *     // ... data to create a MfHolding
     *   }
     * })
     * 
     */
    create<T extends MfHoldingCreateArgs>(args: SelectSubset<T, MfHoldingCreateArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MfHoldings.
     * @param {MfHoldingCreateManyArgs} args - Arguments to create many MfHoldings.
     * @example
     * // Create many MfHoldings
     * const mfHolding = await prisma.mfHolding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MfHoldingCreateManyArgs>(args?: SelectSubset<T, MfHoldingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MfHolding.
     * @param {MfHoldingDeleteArgs} args - Arguments to delete one MfHolding.
     * @example
     * // Delete one MfHolding
     * const MfHolding = await prisma.mfHolding.delete({
     *   where: {
     *     // ... filter to delete one MfHolding
     *   }
     * })
     * 
     */
    delete<T extends MfHoldingDeleteArgs>(args: SelectSubset<T, MfHoldingDeleteArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MfHolding.
     * @param {MfHoldingUpdateArgs} args - Arguments to update one MfHolding.
     * @example
     * // Update one MfHolding
     * const mfHolding = await prisma.mfHolding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MfHoldingUpdateArgs>(args: SelectSubset<T, MfHoldingUpdateArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MfHoldings.
     * @param {MfHoldingDeleteManyArgs} args - Arguments to filter MfHoldings to delete.
     * @example
     * // Delete a few MfHoldings
     * const { count } = await prisma.mfHolding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MfHoldingDeleteManyArgs>(args?: SelectSubset<T, MfHoldingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MfHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfHoldingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MfHoldings
     * const mfHolding = await prisma.mfHolding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MfHoldingUpdateManyArgs>(args: SelectSubset<T, MfHoldingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MfHolding.
     * @param {MfHoldingUpsertArgs} args - Arguments to update or create a MfHolding.
     * @example
     * // Update or create a MfHolding
     * const mfHolding = await prisma.mfHolding.upsert({
     *   create: {
     *     // ... data to create a MfHolding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MfHolding we want to update
     *   }
     * })
     */
    upsert<T extends MfHoldingUpsertArgs>(args: SelectSubset<T, MfHoldingUpsertArgs<ExtArgs>>): Prisma__MfHoldingClient<$Result.GetResult<Prisma.$MfHoldingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MfHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfHoldingCountArgs} args - Arguments to filter MfHoldings to count.
     * @example
     * // Count the number of MfHoldings
     * const count = await prisma.mfHolding.count({
     *   where: {
     *     // ... the filter for the MfHoldings we want to count
     *   }
     * })
    **/
    count<T extends MfHoldingCountArgs>(
      args?: Subset<T, MfHoldingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MfHoldingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MfHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfHoldingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MfHoldingAggregateArgs>(args: Subset<T, MfHoldingAggregateArgs>): Prisma.PrismaPromise<GetMfHoldingAggregateType<T>>

    /**
     * Group by MfHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfHoldingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MfHoldingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MfHoldingGroupByArgs['orderBy'] }
        : { orderBy?: MfHoldingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MfHoldingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfHoldingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MfHolding model
   */
  readonly fields: MfHoldingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MfHolding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MfHoldingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MfHolding model
   */
  interface MfHoldingFieldRefs {
    readonly id: FieldRef<"MfHolding", 'String'>
    readonly userId: FieldRef<"MfHolding", 'String'>
    readonly fundCode: FieldRef<"MfHolding", 'String'>
    readonly fundName: FieldRef<"MfHolding", 'String'>
    readonly purchaseDate: FieldRef<"MfHolding", 'DateTime'>
    readonly purchaseNav: FieldRef<"MfHolding", 'Decimal'>
    readonly units: FieldRef<"MfHolding", 'Decimal'>
    readonly amount: FieldRef<"MfHolding", 'Decimal'>
    readonly updatedAt: FieldRef<"MfHolding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MfHolding findUnique
   */
  export type MfHoldingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * Filter, which MfHolding to fetch.
     */
    where: MfHoldingWhereUniqueInput
  }

  /**
   * MfHolding findUniqueOrThrow
   */
  export type MfHoldingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * Filter, which MfHolding to fetch.
     */
    where: MfHoldingWhereUniqueInput
  }

  /**
   * MfHolding findFirst
   */
  export type MfHoldingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * Filter, which MfHolding to fetch.
     */
    where?: MfHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfHoldings to fetch.
     */
    orderBy?: MfHoldingOrderByWithRelationInput | MfHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfHoldings.
     */
    cursor?: MfHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfHoldings.
     */
    distinct?: MfHoldingScalarFieldEnum | MfHoldingScalarFieldEnum[]
  }

  /**
   * MfHolding findFirstOrThrow
   */
  export type MfHoldingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * Filter, which MfHolding to fetch.
     */
    where?: MfHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfHoldings to fetch.
     */
    orderBy?: MfHoldingOrderByWithRelationInput | MfHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfHoldings.
     */
    cursor?: MfHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfHoldings.
     */
    distinct?: MfHoldingScalarFieldEnum | MfHoldingScalarFieldEnum[]
  }

  /**
   * MfHolding findMany
   */
  export type MfHoldingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * Filter, which MfHoldings to fetch.
     */
    where?: MfHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfHoldings to fetch.
     */
    orderBy?: MfHoldingOrderByWithRelationInput | MfHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MfHoldings.
     */
    cursor?: MfHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfHoldings.
     */
    skip?: number
    distinct?: MfHoldingScalarFieldEnum | MfHoldingScalarFieldEnum[]
  }

  /**
   * MfHolding create
   */
  export type MfHoldingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * The data needed to create a MfHolding.
     */
    data: XOR<MfHoldingCreateInput, MfHoldingUncheckedCreateInput>
  }

  /**
   * MfHolding createMany
   */
  export type MfHoldingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MfHoldings.
     */
    data: MfHoldingCreateManyInput | MfHoldingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MfHolding update
   */
  export type MfHoldingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * The data needed to update a MfHolding.
     */
    data: XOR<MfHoldingUpdateInput, MfHoldingUncheckedUpdateInput>
    /**
     * Choose, which MfHolding to update.
     */
    where: MfHoldingWhereUniqueInput
  }

  /**
   * MfHolding updateMany
   */
  export type MfHoldingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MfHoldings.
     */
    data: XOR<MfHoldingUpdateManyMutationInput, MfHoldingUncheckedUpdateManyInput>
    /**
     * Filter which MfHoldings to update
     */
    where?: MfHoldingWhereInput
    /**
     * Limit how many MfHoldings to update.
     */
    limit?: number
  }

  /**
   * MfHolding upsert
   */
  export type MfHoldingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * The filter to search for the MfHolding to update in case it exists.
     */
    where: MfHoldingWhereUniqueInput
    /**
     * In case the MfHolding found by the `where` argument doesn't exist, create a new MfHolding with this data.
     */
    create: XOR<MfHoldingCreateInput, MfHoldingUncheckedCreateInput>
    /**
     * In case the MfHolding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MfHoldingUpdateInput, MfHoldingUncheckedUpdateInput>
  }

  /**
   * MfHolding delete
   */
  export type MfHoldingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
    /**
     * Filter which MfHolding to delete.
     */
    where: MfHoldingWhereUniqueInput
  }

  /**
   * MfHolding deleteMany
   */
  export type MfHoldingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfHoldings to delete
     */
    where?: MfHoldingWhereInput
    /**
     * Limit how many MfHoldings to delete.
     */
    limit?: number
  }

  /**
   * MfHolding without action
   */
  export type MfHoldingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfHolding
     */
    select?: MfHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfHolding
     */
    omit?: MfHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfHoldingInclude<ExtArgs> | null
  }


  /**
   * Model StockPortfolio
   */

  export type AggregateStockPortfolio = {
    _count: StockPortfolioCountAggregateOutputType | null
    _avg: StockPortfolioAvgAggregateOutputType | null
    _sum: StockPortfolioSumAggregateOutputType | null
    _min: StockPortfolioMinAggregateOutputType | null
    _max: StockPortfolioMaxAggregateOutputType | null
  }

  export type StockPortfolioAvgAggregateOutputType = {
    availableQty: number | null
    latestPrice: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
  }

  export type StockPortfolioSumAggregateOutputType = {
    availableQty: number | null
    latestPrice: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
  }

  export type StockPortfolioMinAggregateOutputType = {
    id: string | null
    userId: string | null
    symbol: string | null
    stockName: string | null
    availableQty: number | null
    latestPrice: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
    updatedAt: Date | null
  }

  export type StockPortfolioMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    symbol: string | null
    stockName: string | null
    availableQty: number | null
    latestPrice: Decimal | null
    investedAmt: Decimal | null
    marketValue: Decimal | null
    pnl: Decimal | null
    roi: Decimal | null
    updatedAt: Date | null
  }

  export type StockPortfolioCountAggregateOutputType = {
    id: number
    userId: number
    symbol: number
    stockName: number
    availableQty: number
    latestPrice: number
    investedAmt: number
    marketValue: number
    pnl: number
    roi: number
    updatedAt: number
    _all: number
  }


  export type StockPortfolioAvgAggregateInputType = {
    availableQty?: true
    latestPrice?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
  }

  export type StockPortfolioSumAggregateInputType = {
    availableQty?: true
    latestPrice?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
  }

  export type StockPortfolioMinAggregateInputType = {
    id?: true
    userId?: true
    symbol?: true
    stockName?: true
    availableQty?: true
    latestPrice?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
    updatedAt?: true
  }

  export type StockPortfolioMaxAggregateInputType = {
    id?: true
    userId?: true
    symbol?: true
    stockName?: true
    availableQty?: true
    latestPrice?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
    updatedAt?: true
  }

  export type StockPortfolioCountAggregateInputType = {
    id?: true
    userId?: true
    symbol?: true
    stockName?: true
    availableQty?: true
    latestPrice?: true
    investedAmt?: true
    marketValue?: true
    pnl?: true
    roi?: true
    updatedAt?: true
    _all?: true
  }

  export type StockPortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockPortfolio to aggregate.
     */
    where?: StockPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPortfolios to fetch.
     */
    orderBy?: StockPortfolioOrderByWithRelationInput | StockPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockPortfolios
    **/
    _count?: true | StockPortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockPortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockPortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockPortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockPortfolioMaxAggregateInputType
  }

  export type GetStockPortfolioAggregateType<T extends StockPortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregateStockPortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockPortfolio[P]>
      : GetScalarType<T[P], AggregateStockPortfolio[P]>
  }




  export type StockPortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockPortfolioWhereInput
    orderBy?: StockPortfolioOrderByWithAggregationInput | StockPortfolioOrderByWithAggregationInput[]
    by: StockPortfolioScalarFieldEnum[] | StockPortfolioScalarFieldEnum
    having?: StockPortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockPortfolioCountAggregateInputType | true
    _avg?: StockPortfolioAvgAggregateInputType
    _sum?: StockPortfolioSumAggregateInputType
    _min?: StockPortfolioMinAggregateInputType
    _max?: StockPortfolioMaxAggregateInputType
  }

  export type StockPortfolioGroupByOutputType = {
    id: string
    userId: string
    symbol: string
    stockName: string
    availableQty: number
    latestPrice: Decimal | null
    investedAmt: Decimal
    marketValue: Decimal
    pnl: Decimal
    roi: Decimal
    updatedAt: Date
    _count: StockPortfolioCountAggregateOutputType | null
    _avg: StockPortfolioAvgAggregateOutputType | null
    _sum: StockPortfolioSumAggregateOutputType | null
    _min: StockPortfolioMinAggregateOutputType | null
    _max: StockPortfolioMaxAggregateOutputType | null
  }

  type GetStockPortfolioGroupByPayload<T extends StockPortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockPortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockPortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockPortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], StockPortfolioGroupByOutputType[P]>
        }
      >
    >


  export type StockPortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symbol?: boolean
    stockName?: boolean
    availableQty?: boolean
    latestPrice?: boolean
    investedAmt?: boolean
    marketValue?: boolean
    pnl?: boolean
    roi?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockPortfolio"]>



  export type StockPortfolioSelectScalar = {
    id?: boolean
    userId?: boolean
    symbol?: boolean
    stockName?: boolean
    availableQty?: boolean
    latestPrice?: boolean
    investedAmt?: boolean
    marketValue?: boolean
    pnl?: boolean
    roi?: boolean
    updatedAt?: boolean
  }

  export type StockPortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "symbol" | "stockName" | "availableQty" | "latestPrice" | "investedAmt" | "marketValue" | "pnl" | "roi" | "updatedAt", ExtArgs["result"]["stockPortfolio"]>
  export type StockPortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StockPortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockPortfolio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      symbol: string
      stockName: string
      availableQty: number
      latestPrice: Prisma.Decimal | null
      investedAmt: Prisma.Decimal
      marketValue: Prisma.Decimal
      pnl: Prisma.Decimal
      roi: Prisma.Decimal
      updatedAt: Date
    }, ExtArgs["result"]["stockPortfolio"]>
    composites: {}
  }

  type StockPortfolioGetPayload<S extends boolean | null | undefined | StockPortfolioDefaultArgs> = $Result.GetResult<Prisma.$StockPortfolioPayload, S>

  type StockPortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockPortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockPortfolioCountAggregateInputType | true
    }

  export interface StockPortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockPortfolio'], meta: { name: 'StockPortfolio' } }
    /**
     * Find zero or one StockPortfolio that matches the filter.
     * @param {StockPortfolioFindUniqueArgs} args - Arguments to find a StockPortfolio
     * @example
     * // Get one StockPortfolio
     * const stockPortfolio = await prisma.stockPortfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockPortfolioFindUniqueArgs>(args: SelectSubset<T, StockPortfolioFindUniqueArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockPortfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockPortfolioFindUniqueOrThrowArgs} args - Arguments to find a StockPortfolio
     * @example
     * // Get one StockPortfolio
     * const stockPortfolio = await prisma.stockPortfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockPortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, StockPortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockPortfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPortfolioFindFirstArgs} args - Arguments to find a StockPortfolio
     * @example
     * // Get one StockPortfolio
     * const stockPortfolio = await prisma.stockPortfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockPortfolioFindFirstArgs>(args?: SelectSubset<T, StockPortfolioFindFirstArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockPortfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPortfolioFindFirstOrThrowArgs} args - Arguments to find a StockPortfolio
     * @example
     * // Get one StockPortfolio
     * const stockPortfolio = await prisma.stockPortfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockPortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, StockPortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockPortfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockPortfolios
     * const stockPortfolios = await prisma.stockPortfolio.findMany()
     * 
     * // Get first 10 StockPortfolios
     * const stockPortfolios = await prisma.stockPortfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockPortfolioWithIdOnly = await prisma.stockPortfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockPortfolioFindManyArgs>(args?: SelectSubset<T, StockPortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockPortfolio.
     * @param {StockPortfolioCreateArgs} args - Arguments to create a StockPortfolio.
     * @example
     * // Create one StockPortfolio
     * const StockPortfolio = await prisma.stockPortfolio.create({
     *   data: {
     *     // ... data to create a StockPortfolio
     *   }
     * })
     * 
     */
    create<T extends StockPortfolioCreateArgs>(args: SelectSubset<T, StockPortfolioCreateArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockPortfolios.
     * @param {StockPortfolioCreateManyArgs} args - Arguments to create many StockPortfolios.
     * @example
     * // Create many StockPortfolios
     * const stockPortfolio = await prisma.stockPortfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockPortfolioCreateManyArgs>(args?: SelectSubset<T, StockPortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockPortfolio.
     * @param {StockPortfolioDeleteArgs} args - Arguments to delete one StockPortfolio.
     * @example
     * // Delete one StockPortfolio
     * const StockPortfolio = await prisma.stockPortfolio.delete({
     *   where: {
     *     // ... filter to delete one StockPortfolio
     *   }
     * })
     * 
     */
    delete<T extends StockPortfolioDeleteArgs>(args: SelectSubset<T, StockPortfolioDeleteArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockPortfolio.
     * @param {StockPortfolioUpdateArgs} args - Arguments to update one StockPortfolio.
     * @example
     * // Update one StockPortfolio
     * const stockPortfolio = await prisma.stockPortfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockPortfolioUpdateArgs>(args: SelectSubset<T, StockPortfolioUpdateArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockPortfolios.
     * @param {StockPortfolioDeleteManyArgs} args - Arguments to filter StockPortfolios to delete.
     * @example
     * // Delete a few StockPortfolios
     * const { count } = await prisma.stockPortfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockPortfolioDeleteManyArgs>(args?: SelectSubset<T, StockPortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockPortfolios
     * const stockPortfolio = await prisma.stockPortfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockPortfolioUpdateManyArgs>(args: SelectSubset<T, StockPortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockPortfolio.
     * @param {StockPortfolioUpsertArgs} args - Arguments to update or create a StockPortfolio.
     * @example
     * // Update or create a StockPortfolio
     * const stockPortfolio = await prisma.stockPortfolio.upsert({
     *   create: {
     *     // ... data to create a StockPortfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockPortfolio we want to update
     *   }
     * })
     */
    upsert<T extends StockPortfolioUpsertArgs>(args: SelectSubset<T, StockPortfolioUpsertArgs<ExtArgs>>): Prisma__StockPortfolioClient<$Result.GetResult<Prisma.$StockPortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPortfolioCountArgs} args - Arguments to filter StockPortfolios to count.
     * @example
     * // Count the number of StockPortfolios
     * const count = await prisma.stockPortfolio.count({
     *   where: {
     *     // ... the filter for the StockPortfolios we want to count
     *   }
     * })
    **/
    count<T extends StockPortfolioCountArgs>(
      args?: Subset<T, StockPortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockPortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockPortfolioAggregateArgs>(args: Subset<T, StockPortfolioAggregateArgs>): Prisma.PrismaPromise<GetStockPortfolioAggregateType<T>>

    /**
     * Group by StockPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockPortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockPortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockPortfolioGroupByArgs['orderBy'] }
        : { orderBy?: StockPortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockPortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockPortfolio model
   */
  readonly fields: StockPortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockPortfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockPortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockPortfolio model
   */
  interface StockPortfolioFieldRefs {
    readonly id: FieldRef<"StockPortfolio", 'String'>
    readonly userId: FieldRef<"StockPortfolio", 'String'>
    readonly symbol: FieldRef<"StockPortfolio", 'String'>
    readonly stockName: FieldRef<"StockPortfolio", 'String'>
    readonly availableQty: FieldRef<"StockPortfolio", 'Int'>
    readonly latestPrice: FieldRef<"StockPortfolio", 'Decimal'>
    readonly investedAmt: FieldRef<"StockPortfolio", 'Decimal'>
    readonly marketValue: FieldRef<"StockPortfolio", 'Decimal'>
    readonly pnl: FieldRef<"StockPortfolio", 'Decimal'>
    readonly roi: FieldRef<"StockPortfolio", 'Decimal'>
    readonly updatedAt: FieldRef<"StockPortfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockPortfolio findUnique
   */
  export type StockPortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which StockPortfolio to fetch.
     */
    where: StockPortfolioWhereUniqueInput
  }

  /**
   * StockPortfolio findUniqueOrThrow
   */
  export type StockPortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which StockPortfolio to fetch.
     */
    where: StockPortfolioWhereUniqueInput
  }

  /**
   * StockPortfolio findFirst
   */
  export type StockPortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which StockPortfolio to fetch.
     */
    where?: StockPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPortfolios to fetch.
     */
    orderBy?: StockPortfolioOrderByWithRelationInput | StockPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockPortfolios.
     */
    cursor?: StockPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockPortfolios.
     */
    distinct?: StockPortfolioScalarFieldEnum | StockPortfolioScalarFieldEnum[]
  }

  /**
   * StockPortfolio findFirstOrThrow
   */
  export type StockPortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which StockPortfolio to fetch.
     */
    where?: StockPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPortfolios to fetch.
     */
    orderBy?: StockPortfolioOrderByWithRelationInput | StockPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockPortfolios.
     */
    cursor?: StockPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockPortfolios.
     */
    distinct?: StockPortfolioScalarFieldEnum | StockPortfolioScalarFieldEnum[]
  }

  /**
   * StockPortfolio findMany
   */
  export type StockPortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which StockPortfolios to fetch.
     */
    where?: StockPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockPortfolios to fetch.
     */
    orderBy?: StockPortfolioOrderByWithRelationInput | StockPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockPortfolios.
     */
    cursor?: StockPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockPortfolios.
     */
    skip?: number
    distinct?: StockPortfolioScalarFieldEnum | StockPortfolioScalarFieldEnum[]
  }

  /**
   * StockPortfolio create
   */
  export type StockPortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a StockPortfolio.
     */
    data: XOR<StockPortfolioCreateInput, StockPortfolioUncheckedCreateInput>
  }

  /**
   * StockPortfolio createMany
   */
  export type StockPortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockPortfolios.
     */
    data: StockPortfolioCreateManyInput | StockPortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockPortfolio update
   */
  export type StockPortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a StockPortfolio.
     */
    data: XOR<StockPortfolioUpdateInput, StockPortfolioUncheckedUpdateInput>
    /**
     * Choose, which StockPortfolio to update.
     */
    where: StockPortfolioWhereUniqueInput
  }

  /**
   * StockPortfolio updateMany
   */
  export type StockPortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockPortfolios.
     */
    data: XOR<StockPortfolioUpdateManyMutationInput, StockPortfolioUncheckedUpdateManyInput>
    /**
     * Filter which StockPortfolios to update
     */
    where?: StockPortfolioWhereInput
    /**
     * Limit how many StockPortfolios to update.
     */
    limit?: number
  }

  /**
   * StockPortfolio upsert
   */
  export type StockPortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the StockPortfolio to update in case it exists.
     */
    where: StockPortfolioWhereUniqueInput
    /**
     * In case the StockPortfolio found by the `where` argument doesn't exist, create a new StockPortfolio with this data.
     */
    create: XOR<StockPortfolioCreateInput, StockPortfolioUncheckedCreateInput>
    /**
     * In case the StockPortfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockPortfolioUpdateInput, StockPortfolioUncheckedUpdateInput>
  }

  /**
   * StockPortfolio delete
   */
  export type StockPortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
    /**
     * Filter which StockPortfolio to delete.
     */
    where: StockPortfolioWhereUniqueInput
  }

  /**
   * StockPortfolio deleteMany
   */
  export type StockPortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockPortfolios to delete
     */
    where?: StockPortfolioWhereInput
    /**
     * Limit how many StockPortfolios to delete.
     */
    limit?: number
  }

  /**
   * StockPortfolio without action
   */
  export type StockPortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockPortfolio
     */
    select?: StockPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockPortfolio
     */
    omit?: StockPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockPortfolioInclude<ExtArgs> | null
  }


  /**
   * Model StockHolding
   */

  export type AggregateStockHolding = {
    _count: StockHoldingCountAggregateOutputType | null
    _avg: StockHoldingAvgAggregateOutputType | null
    _sum: StockHoldingSumAggregateOutputType | null
    _min: StockHoldingMinAggregateOutputType | null
    _max: StockHoldingMaxAggregateOutputType | null
  }

  export type StockHoldingAvgAggregateOutputType = {
    investmentAmt: Decimal | null
    quantity: number | null
    purchasePrice: Decimal | null
  }

  export type StockHoldingSumAggregateOutputType = {
    investmentAmt: Decimal | null
    quantity: number | null
    purchasePrice: Decimal | null
  }

  export type StockHoldingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    symbol: string | null
    stockName: string | null
    investmentAmt: Decimal | null
    quantity: number | null
    purchaseDate: Date | null
    purchasePrice: Decimal | null
    updatedAt: Date | null
  }

  export type StockHoldingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    symbol: string | null
    stockName: string | null
    investmentAmt: Decimal | null
    quantity: number | null
    purchaseDate: Date | null
    purchasePrice: Decimal | null
    updatedAt: Date | null
  }

  export type StockHoldingCountAggregateOutputType = {
    id: number
    userId: number
    symbol: number
    stockName: number
    investmentAmt: number
    quantity: number
    purchaseDate: number
    purchasePrice: number
    updatedAt: number
    _all: number
  }


  export type StockHoldingAvgAggregateInputType = {
    investmentAmt?: true
    quantity?: true
    purchasePrice?: true
  }

  export type StockHoldingSumAggregateInputType = {
    investmentAmt?: true
    quantity?: true
    purchasePrice?: true
  }

  export type StockHoldingMinAggregateInputType = {
    id?: true
    userId?: true
    symbol?: true
    stockName?: true
    investmentAmt?: true
    quantity?: true
    purchaseDate?: true
    purchasePrice?: true
    updatedAt?: true
  }

  export type StockHoldingMaxAggregateInputType = {
    id?: true
    userId?: true
    symbol?: true
    stockName?: true
    investmentAmt?: true
    quantity?: true
    purchaseDate?: true
    purchasePrice?: true
    updatedAt?: true
  }

  export type StockHoldingCountAggregateInputType = {
    id?: true
    userId?: true
    symbol?: true
    stockName?: true
    investmentAmt?: true
    quantity?: true
    purchaseDate?: true
    purchasePrice?: true
    updatedAt?: true
    _all?: true
  }

  export type StockHoldingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockHolding to aggregate.
     */
    where?: StockHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHoldings to fetch.
     */
    orderBy?: StockHoldingOrderByWithRelationInput | StockHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockHoldings
    **/
    _count?: true | StockHoldingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockHoldingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockHoldingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockHoldingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockHoldingMaxAggregateInputType
  }

  export type GetStockHoldingAggregateType<T extends StockHoldingAggregateArgs> = {
        [P in keyof T & keyof AggregateStockHolding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockHolding[P]>
      : GetScalarType<T[P], AggregateStockHolding[P]>
  }




  export type StockHoldingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockHoldingWhereInput
    orderBy?: StockHoldingOrderByWithAggregationInput | StockHoldingOrderByWithAggregationInput[]
    by: StockHoldingScalarFieldEnum[] | StockHoldingScalarFieldEnum
    having?: StockHoldingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockHoldingCountAggregateInputType | true
    _avg?: StockHoldingAvgAggregateInputType
    _sum?: StockHoldingSumAggregateInputType
    _min?: StockHoldingMinAggregateInputType
    _max?: StockHoldingMaxAggregateInputType
  }

  export type StockHoldingGroupByOutputType = {
    id: string
    userId: string
    symbol: string
    stockName: string
    investmentAmt: Decimal
    quantity: number
    purchaseDate: Date
    purchasePrice: Decimal
    updatedAt: Date
    _count: StockHoldingCountAggregateOutputType | null
    _avg: StockHoldingAvgAggregateOutputType | null
    _sum: StockHoldingSumAggregateOutputType | null
    _min: StockHoldingMinAggregateOutputType | null
    _max: StockHoldingMaxAggregateOutputType | null
  }

  type GetStockHoldingGroupByPayload<T extends StockHoldingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockHoldingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockHoldingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockHoldingGroupByOutputType[P]>
            : GetScalarType<T[P], StockHoldingGroupByOutputType[P]>
        }
      >
    >


  export type StockHoldingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symbol?: boolean
    stockName?: boolean
    investmentAmt?: boolean
    quantity?: boolean
    purchaseDate?: boolean
    purchasePrice?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockHolding"]>



  export type StockHoldingSelectScalar = {
    id?: boolean
    userId?: boolean
    symbol?: boolean
    stockName?: boolean
    investmentAmt?: boolean
    quantity?: boolean
    purchaseDate?: boolean
    purchasePrice?: boolean
    updatedAt?: boolean
  }

  export type StockHoldingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "symbol" | "stockName" | "investmentAmt" | "quantity" | "purchaseDate" | "purchasePrice" | "updatedAt", ExtArgs["result"]["stockHolding"]>
  export type StockHoldingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StockHoldingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockHolding"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      symbol: string
      stockName: string
      investmentAmt: Prisma.Decimal
      quantity: number
      purchaseDate: Date
      purchasePrice: Prisma.Decimal
      updatedAt: Date
    }, ExtArgs["result"]["stockHolding"]>
    composites: {}
  }

  type StockHoldingGetPayload<S extends boolean | null | undefined | StockHoldingDefaultArgs> = $Result.GetResult<Prisma.$StockHoldingPayload, S>

  type StockHoldingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockHoldingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockHoldingCountAggregateInputType | true
    }

  export interface StockHoldingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockHolding'], meta: { name: 'StockHolding' } }
    /**
     * Find zero or one StockHolding that matches the filter.
     * @param {StockHoldingFindUniqueArgs} args - Arguments to find a StockHolding
     * @example
     * // Get one StockHolding
     * const stockHolding = await prisma.stockHolding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockHoldingFindUniqueArgs>(args: SelectSubset<T, StockHoldingFindUniqueArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockHolding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockHoldingFindUniqueOrThrowArgs} args - Arguments to find a StockHolding
     * @example
     * // Get one StockHolding
     * const stockHolding = await prisma.stockHolding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockHoldingFindUniqueOrThrowArgs>(args: SelectSubset<T, StockHoldingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockHolding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHoldingFindFirstArgs} args - Arguments to find a StockHolding
     * @example
     * // Get one StockHolding
     * const stockHolding = await prisma.stockHolding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockHoldingFindFirstArgs>(args?: SelectSubset<T, StockHoldingFindFirstArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockHolding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHoldingFindFirstOrThrowArgs} args - Arguments to find a StockHolding
     * @example
     * // Get one StockHolding
     * const stockHolding = await prisma.stockHolding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockHoldingFindFirstOrThrowArgs>(args?: SelectSubset<T, StockHoldingFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockHoldings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHoldingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockHoldings
     * const stockHoldings = await prisma.stockHolding.findMany()
     * 
     * // Get first 10 StockHoldings
     * const stockHoldings = await prisma.stockHolding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockHoldingWithIdOnly = await prisma.stockHolding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockHoldingFindManyArgs>(args?: SelectSubset<T, StockHoldingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockHolding.
     * @param {StockHoldingCreateArgs} args - Arguments to create a StockHolding.
     * @example
     * // Create one StockHolding
     * const StockHolding = await prisma.stockHolding.create({
     *   data: {
     *     // ... data to create a StockHolding
     *   }
     * })
     * 
     */
    create<T extends StockHoldingCreateArgs>(args: SelectSubset<T, StockHoldingCreateArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockHoldings.
     * @param {StockHoldingCreateManyArgs} args - Arguments to create many StockHoldings.
     * @example
     * // Create many StockHoldings
     * const stockHolding = await prisma.stockHolding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockHoldingCreateManyArgs>(args?: SelectSubset<T, StockHoldingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockHolding.
     * @param {StockHoldingDeleteArgs} args - Arguments to delete one StockHolding.
     * @example
     * // Delete one StockHolding
     * const StockHolding = await prisma.stockHolding.delete({
     *   where: {
     *     // ... filter to delete one StockHolding
     *   }
     * })
     * 
     */
    delete<T extends StockHoldingDeleteArgs>(args: SelectSubset<T, StockHoldingDeleteArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockHolding.
     * @param {StockHoldingUpdateArgs} args - Arguments to update one StockHolding.
     * @example
     * // Update one StockHolding
     * const stockHolding = await prisma.stockHolding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockHoldingUpdateArgs>(args: SelectSubset<T, StockHoldingUpdateArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockHoldings.
     * @param {StockHoldingDeleteManyArgs} args - Arguments to filter StockHoldings to delete.
     * @example
     * // Delete a few StockHoldings
     * const { count } = await prisma.stockHolding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockHoldingDeleteManyArgs>(args?: SelectSubset<T, StockHoldingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHoldingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockHoldings
     * const stockHolding = await prisma.stockHolding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockHoldingUpdateManyArgs>(args: SelectSubset<T, StockHoldingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockHolding.
     * @param {StockHoldingUpsertArgs} args - Arguments to update or create a StockHolding.
     * @example
     * // Update or create a StockHolding
     * const stockHolding = await prisma.stockHolding.upsert({
     *   create: {
     *     // ... data to create a StockHolding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockHolding we want to update
     *   }
     * })
     */
    upsert<T extends StockHoldingUpsertArgs>(args: SelectSubset<T, StockHoldingUpsertArgs<ExtArgs>>): Prisma__StockHoldingClient<$Result.GetResult<Prisma.$StockHoldingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockHoldings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHoldingCountArgs} args - Arguments to filter StockHoldings to count.
     * @example
     * // Count the number of StockHoldings
     * const count = await prisma.stockHolding.count({
     *   where: {
     *     // ... the filter for the StockHoldings we want to count
     *   }
     * })
    **/
    count<T extends StockHoldingCountArgs>(
      args?: Subset<T, StockHoldingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockHoldingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHoldingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockHoldingAggregateArgs>(args: Subset<T, StockHoldingAggregateArgs>): Prisma.PrismaPromise<GetStockHoldingAggregateType<T>>

    /**
     * Group by StockHolding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHoldingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockHoldingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockHoldingGroupByArgs['orderBy'] }
        : { orderBy?: StockHoldingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockHoldingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockHoldingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockHolding model
   */
  readonly fields: StockHoldingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockHolding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockHoldingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockHolding model
   */
  interface StockHoldingFieldRefs {
    readonly id: FieldRef<"StockHolding", 'String'>
    readonly userId: FieldRef<"StockHolding", 'String'>
    readonly symbol: FieldRef<"StockHolding", 'String'>
    readonly stockName: FieldRef<"StockHolding", 'String'>
    readonly investmentAmt: FieldRef<"StockHolding", 'Decimal'>
    readonly quantity: FieldRef<"StockHolding", 'Int'>
    readonly purchaseDate: FieldRef<"StockHolding", 'DateTime'>
    readonly purchasePrice: FieldRef<"StockHolding", 'Decimal'>
    readonly updatedAt: FieldRef<"StockHolding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockHolding findUnique
   */
  export type StockHoldingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * Filter, which StockHolding to fetch.
     */
    where: StockHoldingWhereUniqueInput
  }

  /**
   * StockHolding findUniqueOrThrow
   */
  export type StockHoldingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * Filter, which StockHolding to fetch.
     */
    where: StockHoldingWhereUniqueInput
  }

  /**
   * StockHolding findFirst
   */
  export type StockHoldingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * Filter, which StockHolding to fetch.
     */
    where?: StockHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHoldings to fetch.
     */
    orderBy?: StockHoldingOrderByWithRelationInput | StockHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockHoldings.
     */
    cursor?: StockHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockHoldings.
     */
    distinct?: StockHoldingScalarFieldEnum | StockHoldingScalarFieldEnum[]
  }

  /**
   * StockHolding findFirstOrThrow
   */
  export type StockHoldingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * Filter, which StockHolding to fetch.
     */
    where?: StockHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHoldings to fetch.
     */
    orderBy?: StockHoldingOrderByWithRelationInput | StockHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockHoldings.
     */
    cursor?: StockHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHoldings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockHoldings.
     */
    distinct?: StockHoldingScalarFieldEnum | StockHoldingScalarFieldEnum[]
  }

  /**
   * StockHolding findMany
   */
  export type StockHoldingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * Filter, which StockHoldings to fetch.
     */
    where?: StockHoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHoldings to fetch.
     */
    orderBy?: StockHoldingOrderByWithRelationInput | StockHoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockHoldings.
     */
    cursor?: StockHoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHoldings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHoldings.
     */
    skip?: number
    distinct?: StockHoldingScalarFieldEnum | StockHoldingScalarFieldEnum[]
  }

  /**
   * StockHolding create
   */
  export type StockHoldingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * The data needed to create a StockHolding.
     */
    data: XOR<StockHoldingCreateInput, StockHoldingUncheckedCreateInput>
  }

  /**
   * StockHolding createMany
   */
  export type StockHoldingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockHoldings.
     */
    data: StockHoldingCreateManyInput | StockHoldingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockHolding update
   */
  export type StockHoldingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * The data needed to update a StockHolding.
     */
    data: XOR<StockHoldingUpdateInput, StockHoldingUncheckedUpdateInput>
    /**
     * Choose, which StockHolding to update.
     */
    where: StockHoldingWhereUniqueInput
  }

  /**
   * StockHolding updateMany
   */
  export type StockHoldingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockHoldings.
     */
    data: XOR<StockHoldingUpdateManyMutationInput, StockHoldingUncheckedUpdateManyInput>
    /**
     * Filter which StockHoldings to update
     */
    where?: StockHoldingWhereInput
    /**
     * Limit how many StockHoldings to update.
     */
    limit?: number
  }

  /**
   * StockHolding upsert
   */
  export type StockHoldingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * The filter to search for the StockHolding to update in case it exists.
     */
    where: StockHoldingWhereUniqueInput
    /**
     * In case the StockHolding found by the `where` argument doesn't exist, create a new StockHolding with this data.
     */
    create: XOR<StockHoldingCreateInput, StockHoldingUncheckedCreateInput>
    /**
     * In case the StockHolding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockHoldingUpdateInput, StockHoldingUncheckedUpdateInput>
  }

  /**
   * StockHolding delete
   */
  export type StockHoldingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
    /**
     * Filter which StockHolding to delete.
     */
    where: StockHoldingWhereUniqueInput
  }

  /**
   * StockHolding deleteMany
   */
  export type StockHoldingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockHoldings to delete
     */
    where?: StockHoldingWhereInput
    /**
     * Limit how many StockHoldings to delete.
     */
    limit?: number
  }

  /**
   * StockHolding without action
   */
  export type StockHoldingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHolding
     */
    select?: StockHoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHolding
     */
    omit?: StockHoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHoldingInclude<ExtArgs> | null
  }


  /**
   * Model UserPortfolio
   */

  export type AggregateUserPortfolio = {
    _count: UserPortfolioCountAggregateOutputType | null
    _avg: UserPortfolioAvgAggregateOutputType | null
    _sum: UserPortfolioSumAggregateOutputType | null
    _min: UserPortfolioMinAggregateOutputType | null
    _max: UserPortfolioMaxAggregateOutputType | null
  }

  export type UserPortfolioAvgAggregateOutputType = {
    totalInv: Decimal | null
    totalMv: Decimal | null
    totalPnl: Decimal | null
    totalRoi: Decimal | null
  }

  export type UserPortfolioSumAggregateOutputType = {
    totalInv: Decimal | null
    totalMv: Decimal | null
    totalPnl: Decimal | null
    totalRoi: Decimal | null
  }

  export type UserPortfolioMinAggregateOutputType = {
    id: string | null
    userId: string | null
    portfolioType: $Enums.PortfolioType | null
    totalInv: Decimal | null
    totalMv: Decimal | null
    totalPnl: Decimal | null
    totalRoi: Decimal | null
    updatedAt: Date | null
  }

  export type UserPortfolioMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    portfolioType: $Enums.PortfolioType | null
    totalInv: Decimal | null
    totalMv: Decimal | null
    totalPnl: Decimal | null
    totalRoi: Decimal | null
    updatedAt: Date | null
  }

  export type UserPortfolioCountAggregateOutputType = {
    id: number
    userId: number
    portfolioType: number
    totalInv: number
    totalMv: number
    totalPnl: number
    totalRoi: number
    updatedAt: number
    _all: number
  }


  export type UserPortfolioAvgAggregateInputType = {
    totalInv?: true
    totalMv?: true
    totalPnl?: true
    totalRoi?: true
  }

  export type UserPortfolioSumAggregateInputType = {
    totalInv?: true
    totalMv?: true
    totalPnl?: true
    totalRoi?: true
  }

  export type UserPortfolioMinAggregateInputType = {
    id?: true
    userId?: true
    portfolioType?: true
    totalInv?: true
    totalMv?: true
    totalPnl?: true
    totalRoi?: true
    updatedAt?: true
  }

  export type UserPortfolioMaxAggregateInputType = {
    id?: true
    userId?: true
    portfolioType?: true
    totalInv?: true
    totalMv?: true
    totalPnl?: true
    totalRoi?: true
    updatedAt?: true
  }

  export type UserPortfolioCountAggregateInputType = {
    id?: true
    userId?: true
    portfolioType?: true
    totalInv?: true
    totalMv?: true
    totalPnl?: true
    totalRoi?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPortfolio to aggregate.
     */
    where?: UserPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPortfolios to fetch.
     */
    orderBy?: UserPortfolioOrderByWithRelationInput | UserPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPortfolios
    **/
    _count?: true | UserPortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPortfolioMaxAggregateInputType
  }

  export type GetUserPortfolioAggregateType<T extends UserPortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPortfolio[P]>
      : GetScalarType<T[P], AggregateUserPortfolio[P]>
  }




  export type UserPortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPortfolioWhereInput
    orderBy?: UserPortfolioOrderByWithAggregationInput | UserPortfolioOrderByWithAggregationInput[]
    by: UserPortfolioScalarFieldEnum[] | UserPortfolioScalarFieldEnum
    having?: UserPortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPortfolioCountAggregateInputType | true
    _avg?: UserPortfolioAvgAggregateInputType
    _sum?: UserPortfolioSumAggregateInputType
    _min?: UserPortfolioMinAggregateInputType
    _max?: UserPortfolioMaxAggregateInputType
  }

  export type UserPortfolioGroupByOutputType = {
    id: string
    userId: string
    portfolioType: $Enums.PortfolioType
    totalInv: Decimal
    totalMv: Decimal
    totalPnl: Decimal
    totalRoi: Decimal
    updatedAt: Date
    _count: UserPortfolioCountAggregateOutputType | null
    _avg: UserPortfolioAvgAggregateOutputType | null
    _sum: UserPortfolioSumAggregateOutputType | null
    _min: UserPortfolioMinAggregateOutputType | null
    _max: UserPortfolioMaxAggregateOutputType | null
  }

  type GetUserPortfolioGroupByPayload<T extends UserPortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], UserPortfolioGroupByOutputType[P]>
        }
      >
    >


  export type UserPortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    portfolioType?: boolean
    totalInv?: boolean
    totalMv?: boolean
    totalPnl?: boolean
    totalRoi?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPortfolio"]>



  export type UserPortfolioSelectScalar = {
    id?: boolean
    userId?: boolean
    portfolioType?: boolean
    totalInv?: boolean
    totalMv?: boolean
    totalPnl?: boolean
    totalRoi?: boolean
    updatedAt?: boolean
  }

  export type UserPortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "portfolioType" | "totalInv" | "totalMv" | "totalPnl" | "totalRoi" | "updatedAt", ExtArgs["result"]["userPortfolio"]>
  export type UserPortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPortfolio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      portfolioType: $Enums.PortfolioType
      totalInv: Prisma.Decimal
      totalMv: Prisma.Decimal
      totalPnl: Prisma.Decimal
      totalRoi: Prisma.Decimal
      updatedAt: Date
    }, ExtArgs["result"]["userPortfolio"]>
    composites: {}
  }

  type UserPortfolioGetPayload<S extends boolean | null | undefined | UserPortfolioDefaultArgs> = $Result.GetResult<Prisma.$UserPortfolioPayload, S>

  type UserPortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPortfolioCountAggregateInputType | true
    }

  export interface UserPortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPortfolio'], meta: { name: 'UserPortfolio' } }
    /**
     * Find zero or one UserPortfolio that matches the filter.
     * @param {UserPortfolioFindUniqueArgs} args - Arguments to find a UserPortfolio
     * @example
     * // Get one UserPortfolio
     * const userPortfolio = await prisma.userPortfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPortfolioFindUniqueArgs>(args: SelectSubset<T, UserPortfolioFindUniqueArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPortfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPortfolioFindUniqueOrThrowArgs} args - Arguments to find a UserPortfolio
     * @example
     * // Get one UserPortfolio
     * const userPortfolio = await prisma.userPortfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPortfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPortfolioFindFirstArgs} args - Arguments to find a UserPortfolio
     * @example
     * // Get one UserPortfolio
     * const userPortfolio = await prisma.userPortfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPortfolioFindFirstArgs>(args?: SelectSubset<T, UserPortfolioFindFirstArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPortfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPortfolioFindFirstOrThrowArgs} args - Arguments to find a UserPortfolio
     * @example
     * // Get one UserPortfolio
     * const userPortfolio = await prisma.userPortfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPortfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPortfolios
     * const userPortfolios = await prisma.userPortfolio.findMany()
     * 
     * // Get first 10 UserPortfolios
     * const userPortfolios = await prisma.userPortfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPortfolioWithIdOnly = await prisma.userPortfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPortfolioFindManyArgs>(args?: SelectSubset<T, UserPortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPortfolio.
     * @param {UserPortfolioCreateArgs} args - Arguments to create a UserPortfolio.
     * @example
     * // Create one UserPortfolio
     * const UserPortfolio = await prisma.userPortfolio.create({
     *   data: {
     *     // ... data to create a UserPortfolio
     *   }
     * })
     * 
     */
    create<T extends UserPortfolioCreateArgs>(args: SelectSubset<T, UserPortfolioCreateArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPortfolios.
     * @param {UserPortfolioCreateManyArgs} args - Arguments to create many UserPortfolios.
     * @example
     * // Create many UserPortfolios
     * const userPortfolio = await prisma.userPortfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPortfolioCreateManyArgs>(args?: SelectSubset<T, UserPortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPortfolio.
     * @param {UserPortfolioDeleteArgs} args - Arguments to delete one UserPortfolio.
     * @example
     * // Delete one UserPortfolio
     * const UserPortfolio = await prisma.userPortfolio.delete({
     *   where: {
     *     // ... filter to delete one UserPortfolio
     *   }
     * })
     * 
     */
    delete<T extends UserPortfolioDeleteArgs>(args: SelectSubset<T, UserPortfolioDeleteArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPortfolio.
     * @param {UserPortfolioUpdateArgs} args - Arguments to update one UserPortfolio.
     * @example
     * // Update one UserPortfolio
     * const userPortfolio = await prisma.userPortfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPortfolioUpdateArgs>(args: SelectSubset<T, UserPortfolioUpdateArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPortfolios.
     * @param {UserPortfolioDeleteManyArgs} args - Arguments to filter UserPortfolios to delete.
     * @example
     * // Delete a few UserPortfolios
     * const { count } = await prisma.userPortfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPortfolioDeleteManyArgs>(args?: SelectSubset<T, UserPortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPortfolios
     * const userPortfolio = await prisma.userPortfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPortfolioUpdateManyArgs>(args: SelectSubset<T, UserPortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPortfolio.
     * @param {UserPortfolioUpsertArgs} args - Arguments to update or create a UserPortfolio.
     * @example
     * // Update or create a UserPortfolio
     * const userPortfolio = await prisma.userPortfolio.upsert({
     *   create: {
     *     // ... data to create a UserPortfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPortfolio we want to update
     *   }
     * })
     */
    upsert<T extends UserPortfolioUpsertArgs>(args: SelectSubset<T, UserPortfolioUpsertArgs<ExtArgs>>): Prisma__UserPortfolioClient<$Result.GetResult<Prisma.$UserPortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPortfolioCountArgs} args - Arguments to filter UserPortfolios to count.
     * @example
     * // Count the number of UserPortfolios
     * const count = await prisma.userPortfolio.count({
     *   where: {
     *     // ... the filter for the UserPortfolios we want to count
     *   }
     * })
    **/
    count<T extends UserPortfolioCountArgs>(
      args?: Subset<T, UserPortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPortfolioAggregateArgs>(args: Subset<T, UserPortfolioAggregateArgs>): Prisma.PrismaPromise<GetUserPortfolioAggregateType<T>>

    /**
     * Group by UserPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPortfolioGroupByArgs['orderBy'] }
        : { orderBy?: UserPortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPortfolio model
   */
  readonly fields: UserPortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPortfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPortfolio model
   */
  interface UserPortfolioFieldRefs {
    readonly id: FieldRef<"UserPortfolio", 'String'>
    readonly userId: FieldRef<"UserPortfolio", 'String'>
    readonly portfolioType: FieldRef<"UserPortfolio", 'PortfolioType'>
    readonly totalInv: FieldRef<"UserPortfolio", 'Decimal'>
    readonly totalMv: FieldRef<"UserPortfolio", 'Decimal'>
    readonly totalPnl: FieldRef<"UserPortfolio", 'Decimal'>
    readonly totalRoi: FieldRef<"UserPortfolio", 'Decimal'>
    readonly updatedAt: FieldRef<"UserPortfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPortfolio findUnique
   */
  export type UserPortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which UserPortfolio to fetch.
     */
    where: UserPortfolioWhereUniqueInput
  }

  /**
   * UserPortfolio findUniqueOrThrow
   */
  export type UserPortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which UserPortfolio to fetch.
     */
    where: UserPortfolioWhereUniqueInput
  }

  /**
   * UserPortfolio findFirst
   */
  export type UserPortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which UserPortfolio to fetch.
     */
    where?: UserPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPortfolios to fetch.
     */
    orderBy?: UserPortfolioOrderByWithRelationInput | UserPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPortfolios.
     */
    cursor?: UserPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPortfolios.
     */
    distinct?: UserPortfolioScalarFieldEnum | UserPortfolioScalarFieldEnum[]
  }

  /**
   * UserPortfolio findFirstOrThrow
   */
  export type UserPortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which UserPortfolio to fetch.
     */
    where?: UserPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPortfolios to fetch.
     */
    orderBy?: UserPortfolioOrderByWithRelationInput | UserPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPortfolios.
     */
    cursor?: UserPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPortfolios.
     */
    distinct?: UserPortfolioScalarFieldEnum | UserPortfolioScalarFieldEnum[]
  }

  /**
   * UserPortfolio findMany
   */
  export type UserPortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which UserPortfolios to fetch.
     */
    where?: UserPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPortfolios to fetch.
     */
    orderBy?: UserPortfolioOrderByWithRelationInput | UserPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPortfolios.
     */
    cursor?: UserPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPortfolios.
     */
    skip?: number
    distinct?: UserPortfolioScalarFieldEnum | UserPortfolioScalarFieldEnum[]
  }

  /**
   * UserPortfolio create
   */
  export type UserPortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPortfolio.
     */
    data: XOR<UserPortfolioCreateInput, UserPortfolioUncheckedCreateInput>
  }

  /**
   * UserPortfolio createMany
   */
  export type UserPortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPortfolios.
     */
    data: UserPortfolioCreateManyInput | UserPortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPortfolio update
   */
  export type UserPortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPortfolio.
     */
    data: XOR<UserPortfolioUpdateInput, UserPortfolioUncheckedUpdateInput>
    /**
     * Choose, which UserPortfolio to update.
     */
    where: UserPortfolioWhereUniqueInput
  }

  /**
   * UserPortfolio updateMany
   */
  export type UserPortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPortfolios.
     */
    data: XOR<UserPortfolioUpdateManyMutationInput, UserPortfolioUncheckedUpdateManyInput>
    /**
     * Filter which UserPortfolios to update
     */
    where?: UserPortfolioWhereInput
    /**
     * Limit how many UserPortfolios to update.
     */
    limit?: number
  }

  /**
   * UserPortfolio upsert
   */
  export type UserPortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPortfolio to update in case it exists.
     */
    where: UserPortfolioWhereUniqueInput
    /**
     * In case the UserPortfolio found by the `where` argument doesn't exist, create a new UserPortfolio with this data.
     */
    create: XOR<UserPortfolioCreateInput, UserPortfolioUncheckedCreateInput>
    /**
     * In case the UserPortfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPortfolioUpdateInput, UserPortfolioUncheckedUpdateInput>
  }

  /**
   * UserPortfolio delete
   */
  export type UserPortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
    /**
     * Filter which UserPortfolio to delete.
     */
    where: UserPortfolioWhereUniqueInput
  }

  /**
   * UserPortfolio deleteMany
   */
  export type UserPortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPortfolios to delete
     */
    where?: UserPortfolioWhereInput
    /**
     * Limit how many UserPortfolios to delete.
     */
    limit?: number
  }

  /**
   * UserPortfolio without action
   */
  export type UserPortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPortfolio
     */
    select?: UserPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPortfolio
     */
    omit?: UserPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPortfolioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    avatar: 'avatar',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    assetType: 'assetType',
    code: 'code',
    name: 'name',
    tnxType: 'tnxType',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const MfPortfolioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    latestNav: 'latestNav',
    fundCode: 'fundCode',
    fundName: 'fundName',
    fundType: 'fundType',
    units: 'units',
    investedAmt: 'investedAmt',
    marketValue: 'marketValue',
    pnl: 'pnl',
    roi: 'roi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MfPortfolioScalarFieldEnum = (typeof MfPortfolioScalarFieldEnum)[keyof typeof MfPortfolioScalarFieldEnum]


  export const MfHoldingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fundCode: 'fundCode',
    fundName: 'fundName',
    purchaseDate: 'purchaseDate',
    purchaseNav: 'purchaseNav',
    units: 'units',
    amount: 'amount',
    updatedAt: 'updatedAt'
  };

  export type MfHoldingScalarFieldEnum = (typeof MfHoldingScalarFieldEnum)[keyof typeof MfHoldingScalarFieldEnum]


  export const StockPortfolioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    symbol: 'symbol',
    stockName: 'stockName',
    availableQty: 'availableQty',
    latestPrice: 'latestPrice',
    investedAmt: 'investedAmt',
    marketValue: 'marketValue',
    pnl: 'pnl',
    roi: 'roi',
    updatedAt: 'updatedAt'
  };

  export type StockPortfolioScalarFieldEnum = (typeof StockPortfolioScalarFieldEnum)[keyof typeof StockPortfolioScalarFieldEnum]


  export const StockHoldingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    symbol: 'symbol',
    stockName: 'stockName',
    investmentAmt: 'investmentAmt',
    quantity: 'quantity',
    purchaseDate: 'purchaseDate',
    purchasePrice: 'purchasePrice',
    updatedAt: 'updatedAt'
  };

  export type StockHoldingScalarFieldEnum = (typeof StockHoldingScalarFieldEnum)[keyof typeof StockHoldingScalarFieldEnum]


  export const UserPortfolioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    portfolioType: 'portfolioType',
    totalInv: 'totalInv',
    totalMv: 'totalMv',
    totalPnl: 'totalPnl',
    totalRoi: 'totalRoi',
    updatedAt: 'updatedAt'
  };

  export type UserPortfolioScalarFieldEnum = (typeof UserPortfolioScalarFieldEnum)[keyof typeof UserPortfolioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    name: 'name'
  };

  export type TransactionOrderByRelevanceFieldEnum = (typeof TransactionOrderByRelevanceFieldEnum)[keyof typeof TransactionOrderByRelevanceFieldEnum]


  export const MfPortfolioOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    fundCode: 'fundCode',
    fundName: 'fundName'
  };

  export type MfPortfolioOrderByRelevanceFieldEnum = (typeof MfPortfolioOrderByRelevanceFieldEnum)[keyof typeof MfPortfolioOrderByRelevanceFieldEnum]


  export const MfHoldingOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    fundCode: 'fundCode',
    fundName: 'fundName'
  };

  export type MfHoldingOrderByRelevanceFieldEnum = (typeof MfHoldingOrderByRelevanceFieldEnum)[keyof typeof MfHoldingOrderByRelevanceFieldEnum]


  export const StockPortfolioOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    symbol: 'symbol',
    stockName: 'stockName'
  };

  export type StockPortfolioOrderByRelevanceFieldEnum = (typeof StockPortfolioOrderByRelevanceFieldEnum)[keyof typeof StockPortfolioOrderByRelevanceFieldEnum]


  export const StockHoldingOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    symbol: 'symbol',
    stockName: 'stockName'
  };

  export type StockHoldingOrderByRelevanceFieldEnum = (typeof StockHoldingOrderByRelevanceFieldEnum)[keyof typeof StockHoldingOrderByRelevanceFieldEnum]


  export const UserPortfolioOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type UserPortfolioOrderByRelevanceFieldEnum = (typeof UserPortfolioOrderByRelevanceFieldEnum)[keyof typeof UserPortfolioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'FundType'
   */
  export type EnumFundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FundType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'PortfolioType'
   */
  export type EnumPortfolioTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    avatar?: StringNullableFilter<"User"> | string | null
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
    mfPortfolio?: MfPortfolioListRelationFilter
    mfHolding?: MfHoldingListRelationFilter
    stockPortfolio?: StockPortfolioListRelationFilter
    stockHoldings?: StockHoldingListRelationFilter
    userPortfolio?: UserPortfolioListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    avatar?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    mfPortfolio?: MfPortfolioOrderByRelationAggregateInput
    mfHolding?: MfHoldingOrderByRelationAggregateInput
    stockPortfolio?: StockPortfolioOrderByRelationAggregateInput
    stockHoldings?: StockHoldingOrderByRelationAggregateInput
    userPortfolio?: UserPortfolioOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    avatar?: StringNullableFilter<"User"> | string | null
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
    mfPortfolio?: MfPortfolioListRelationFilter
    mfHolding?: MfHoldingListRelationFilter
    stockPortfolio?: StockPortfolioListRelationFilter
    stockHoldings?: StockHoldingListRelationFilter
    userPortfolio?: UserPortfolioListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    avatar?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    balance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    assetType?: EnumAssetTypeNullableFilter<"Transaction"> | $Enums.AssetType | null
    code?: StringNullableFilter<"Transaction"> | string | null
    name?: StringNullableFilter<"Transaction"> | string | null
    tnxType?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    quantity?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    price?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    assetType?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    tnxType?: SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: TransactionOrderByRelevanceInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    assetType?: EnumAssetTypeNullableFilter<"Transaction"> | $Enums.AssetType | null
    code?: StringNullableFilter<"Transaction"> | string | null
    name?: StringNullableFilter<"Transaction"> | string | null
    tnxType?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    quantity?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    price?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    assetType?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    tnxType?: SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    assetType?: EnumAssetTypeNullableWithAggregatesFilter<"Transaction"> | $Enums.AssetType | null
    code?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    name?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    tnxType?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    quantity?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    price?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type MfPortfolioWhereInput = {
    AND?: MfPortfolioWhereInput | MfPortfolioWhereInput[]
    OR?: MfPortfolioWhereInput[]
    NOT?: MfPortfolioWhereInput | MfPortfolioWhereInput[]
    id?: StringFilter<"MfPortfolio"> | string
    userId?: StringFilter<"MfPortfolio"> | string
    latestNav?: DecimalNullableFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFilter<"MfPortfolio"> | string
    fundName?: StringFilter<"MfPortfolio"> | string
    fundType?: EnumFundTypeFilter<"MfPortfolio"> | $Enums.FundType
    units?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MfPortfolio"> | Date | string
    updatedAt?: DateTimeFilter<"MfPortfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MfPortfolioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    latestNav?: SortOrderInput | SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    fundType?: SortOrder
    units?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: MfPortfolioOrderByRelevanceInput
  }

  export type MfPortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_fundCode?: MfPortfolioUserIdFundCodeCompoundUniqueInput
    AND?: MfPortfolioWhereInput | MfPortfolioWhereInput[]
    OR?: MfPortfolioWhereInput[]
    NOT?: MfPortfolioWhereInput | MfPortfolioWhereInput[]
    userId?: StringFilter<"MfPortfolio"> | string
    latestNav?: DecimalNullableFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFilter<"MfPortfolio"> | string
    fundName?: StringFilter<"MfPortfolio"> | string
    fundType?: EnumFundTypeFilter<"MfPortfolio"> | $Enums.FundType
    units?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MfPortfolio"> | Date | string
    updatedAt?: DateTimeFilter<"MfPortfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_fundCode">

  export type MfPortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    latestNav?: SortOrderInput | SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    fundType?: SortOrder
    units?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MfPortfolioCountOrderByAggregateInput
    _avg?: MfPortfolioAvgOrderByAggregateInput
    _max?: MfPortfolioMaxOrderByAggregateInput
    _min?: MfPortfolioMinOrderByAggregateInput
    _sum?: MfPortfolioSumOrderByAggregateInput
  }

  export type MfPortfolioScalarWhereWithAggregatesInput = {
    AND?: MfPortfolioScalarWhereWithAggregatesInput | MfPortfolioScalarWhereWithAggregatesInput[]
    OR?: MfPortfolioScalarWhereWithAggregatesInput[]
    NOT?: MfPortfolioScalarWhereWithAggregatesInput | MfPortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MfPortfolio"> | string
    userId?: StringWithAggregatesFilter<"MfPortfolio"> | string
    latestNav?: DecimalNullableWithAggregatesFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringWithAggregatesFilter<"MfPortfolio"> | string
    fundName?: StringWithAggregatesFilter<"MfPortfolio"> | string
    fundType?: EnumFundTypeWithAggregatesFilter<"MfPortfolio"> | $Enums.FundType
    units?: DecimalWithAggregatesFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalWithAggregatesFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalWithAggregatesFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalWithAggregatesFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalWithAggregatesFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"MfPortfolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MfPortfolio"> | Date | string
  }

  export type MfHoldingWhereInput = {
    AND?: MfHoldingWhereInput | MfHoldingWhereInput[]
    OR?: MfHoldingWhereInput[]
    NOT?: MfHoldingWhereInput | MfHoldingWhereInput[]
    id?: StringFilter<"MfHolding"> | string
    userId?: StringFilter<"MfHolding"> | string
    fundCode?: StringFilter<"MfHolding"> | string
    fundName?: StringFilter<"MfHolding"> | string
    purchaseDate?: DateTimeFilter<"MfHolding"> | Date | string
    purchaseNav?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    units?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"MfHolding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MfHoldingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    purchaseDate?: SortOrder
    purchaseNav?: SortOrder
    units?: SortOrder
    amount?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: MfHoldingOrderByRelevanceInput
  }

  export type MfHoldingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MfHoldingWhereInput | MfHoldingWhereInput[]
    OR?: MfHoldingWhereInput[]
    NOT?: MfHoldingWhereInput | MfHoldingWhereInput[]
    userId?: StringFilter<"MfHolding"> | string
    fundCode?: StringFilter<"MfHolding"> | string
    fundName?: StringFilter<"MfHolding"> | string
    purchaseDate?: DateTimeFilter<"MfHolding"> | Date | string
    purchaseNav?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    units?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"MfHolding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MfHoldingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    purchaseDate?: SortOrder
    purchaseNav?: SortOrder
    units?: SortOrder
    amount?: SortOrder
    updatedAt?: SortOrder
    _count?: MfHoldingCountOrderByAggregateInput
    _avg?: MfHoldingAvgOrderByAggregateInput
    _max?: MfHoldingMaxOrderByAggregateInput
    _min?: MfHoldingMinOrderByAggregateInput
    _sum?: MfHoldingSumOrderByAggregateInput
  }

  export type MfHoldingScalarWhereWithAggregatesInput = {
    AND?: MfHoldingScalarWhereWithAggregatesInput | MfHoldingScalarWhereWithAggregatesInput[]
    OR?: MfHoldingScalarWhereWithAggregatesInput[]
    NOT?: MfHoldingScalarWhereWithAggregatesInput | MfHoldingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MfHolding"> | string
    userId?: StringWithAggregatesFilter<"MfHolding"> | string
    fundCode?: StringWithAggregatesFilter<"MfHolding"> | string
    fundName?: StringWithAggregatesFilter<"MfHolding"> | string
    purchaseDate?: DateTimeWithAggregatesFilter<"MfHolding"> | Date | string
    purchaseNav?: DecimalWithAggregatesFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    units?: DecimalWithAggregatesFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"MfHolding"> | Date | string
  }

  export type StockPortfolioWhereInput = {
    AND?: StockPortfolioWhereInput | StockPortfolioWhereInput[]
    OR?: StockPortfolioWhereInput[]
    NOT?: StockPortfolioWhereInput | StockPortfolioWhereInput[]
    id?: StringFilter<"StockPortfolio"> | string
    userId?: StringFilter<"StockPortfolio"> | string
    symbol?: StringFilter<"StockPortfolio"> | string
    stockName?: StringFilter<"StockPortfolio"> | string
    availableQty?: IntFilter<"StockPortfolio"> | number
    latestPrice?: DecimalNullableFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"StockPortfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StockPortfolioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    availableQty?: SortOrder
    latestPrice?: SortOrderInput | SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: StockPortfolioOrderByRelevanceInput
  }

  export type StockPortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockPortfolioWhereInput | StockPortfolioWhereInput[]
    OR?: StockPortfolioWhereInput[]
    NOT?: StockPortfolioWhereInput | StockPortfolioWhereInput[]
    userId?: StringFilter<"StockPortfolio"> | string
    symbol?: StringFilter<"StockPortfolio"> | string
    stockName?: StringFilter<"StockPortfolio"> | string
    availableQty?: IntFilter<"StockPortfolio"> | number
    latestPrice?: DecimalNullableFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"StockPortfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StockPortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    availableQty?: SortOrder
    latestPrice?: SortOrderInput | SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    updatedAt?: SortOrder
    _count?: StockPortfolioCountOrderByAggregateInput
    _avg?: StockPortfolioAvgOrderByAggregateInput
    _max?: StockPortfolioMaxOrderByAggregateInput
    _min?: StockPortfolioMinOrderByAggregateInput
    _sum?: StockPortfolioSumOrderByAggregateInput
  }

  export type StockPortfolioScalarWhereWithAggregatesInput = {
    AND?: StockPortfolioScalarWhereWithAggregatesInput | StockPortfolioScalarWhereWithAggregatesInput[]
    OR?: StockPortfolioScalarWhereWithAggregatesInput[]
    NOT?: StockPortfolioScalarWhereWithAggregatesInput | StockPortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockPortfolio"> | string
    userId?: StringWithAggregatesFilter<"StockPortfolio"> | string
    symbol?: StringWithAggregatesFilter<"StockPortfolio"> | string
    stockName?: StringWithAggregatesFilter<"StockPortfolio"> | string
    availableQty?: IntWithAggregatesFilter<"StockPortfolio"> | number
    latestPrice?: DecimalNullableWithAggregatesFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalWithAggregatesFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalWithAggregatesFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalWithAggregatesFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalWithAggregatesFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockPortfolio"> | Date | string
  }

  export type StockHoldingWhereInput = {
    AND?: StockHoldingWhereInput | StockHoldingWhereInput[]
    OR?: StockHoldingWhereInput[]
    NOT?: StockHoldingWhereInput | StockHoldingWhereInput[]
    id?: StringFilter<"StockHolding"> | string
    userId?: StringFilter<"StockHolding"> | string
    symbol?: StringFilter<"StockHolding"> | string
    stockName?: StringFilter<"StockHolding"> | string
    investmentAmt?: DecimalFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"StockHolding"> | number
    purchaseDate?: DateTimeFilter<"StockHolding"> | Date | string
    purchasePrice?: DecimalFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"StockHolding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StockHoldingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    investmentAmt?: SortOrder
    quantity?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: StockHoldingOrderByRelevanceInput
  }

  export type StockHoldingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockHoldingWhereInput | StockHoldingWhereInput[]
    OR?: StockHoldingWhereInput[]
    NOT?: StockHoldingWhereInput | StockHoldingWhereInput[]
    userId?: StringFilter<"StockHolding"> | string
    symbol?: StringFilter<"StockHolding"> | string
    stockName?: StringFilter<"StockHolding"> | string
    investmentAmt?: DecimalFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"StockHolding"> | number
    purchaseDate?: DateTimeFilter<"StockHolding"> | Date | string
    purchasePrice?: DecimalFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"StockHolding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StockHoldingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    investmentAmt?: SortOrder
    quantity?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    updatedAt?: SortOrder
    _count?: StockHoldingCountOrderByAggregateInput
    _avg?: StockHoldingAvgOrderByAggregateInput
    _max?: StockHoldingMaxOrderByAggregateInput
    _min?: StockHoldingMinOrderByAggregateInput
    _sum?: StockHoldingSumOrderByAggregateInput
  }

  export type StockHoldingScalarWhereWithAggregatesInput = {
    AND?: StockHoldingScalarWhereWithAggregatesInput | StockHoldingScalarWhereWithAggregatesInput[]
    OR?: StockHoldingScalarWhereWithAggregatesInput[]
    NOT?: StockHoldingScalarWhereWithAggregatesInput | StockHoldingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockHolding"> | string
    userId?: StringWithAggregatesFilter<"StockHolding"> | string
    symbol?: StringWithAggregatesFilter<"StockHolding"> | string
    stockName?: StringWithAggregatesFilter<"StockHolding"> | string
    investmentAmt?: DecimalWithAggregatesFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"StockHolding"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"StockHolding"> | Date | string
    purchasePrice?: DecimalWithAggregatesFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockHolding"> | Date | string
  }

  export type UserPortfolioWhereInput = {
    AND?: UserPortfolioWhereInput | UserPortfolioWhereInput[]
    OR?: UserPortfolioWhereInput[]
    NOT?: UserPortfolioWhereInput | UserPortfolioWhereInput[]
    id?: StringFilter<"UserPortfolio"> | string
    userId?: StringFilter<"UserPortfolio"> | string
    portfolioType?: EnumPortfolioTypeFilter<"UserPortfolio"> | $Enums.PortfolioType
    totalInv?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"UserPortfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPortfolioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    portfolioType?: SortOrder
    totalInv?: SortOrder
    totalMv?: SortOrder
    totalPnl?: SortOrder
    totalRoi?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserPortfolioOrderByRelevanceInput
  }

  export type UserPortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_portfolioType?: UserPortfolioUserIdPortfolioTypeCompoundUniqueInput
    AND?: UserPortfolioWhereInput | UserPortfolioWhereInput[]
    OR?: UserPortfolioWhereInput[]
    NOT?: UserPortfolioWhereInput | UserPortfolioWhereInput[]
    userId?: StringFilter<"UserPortfolio"> | string
    portfolioType?: EnumPortfolioTypeFilter<"UserPortfolio"> | $Enums.PortfolioType
    totalInv?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"UserPortfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_portfolioType">

  export type UserPortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    portfolioType?: SortOrder
    totalInv?: SortOrder
    totalMv?: SortOrder
    totalPnl?: SortOrder
    totalRoi?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPortfolioCountOrderByAggregateInput
    _avg?: UserPortfolioAvgOrderByAggregateInput
    _max?: UserPortfolioMaxOrderByAggregateInput
    _min?: UserPortfolioMinOrderByAggregateInput
    _sum?: UserPortfolioSumOrderByAggregateInput
  }

  export type UserPortfolioScalarWhereWithAggregatesInput = {
    AND?: UserPortfolioScalarWhereWithAggregatesInput | UserPortfolioScalarWhereWithAggregatesInput[]
    OR?: UserPortfolioScalarWhereWithAggregatesInput[]
    NOT?: UserPortfolioScalarWhereWithAggregatesInput | UserPortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPortfolio"> | string
    userId?: StringWithAggregatesFilter<"UserPortfolio"> | string
    portfolioType?: EnumPortfolioTypeWithAggregatesFilter<"UserPortfolio"> | $Enums.PortfolioType
    totalInv?: DecimalWithAggregatesFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalWithAggregatesFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalWithAggregatesFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalWithAggregatesFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPortfolio"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioUncheckedCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingUncheckedCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioUncheckedCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingUncheckedCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUncheckedUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUncheckedUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUncheckedUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUncheckedUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    assetType?: $Enums.AssetType | null
    code?: string | null
    name?: string | null
    tnxType: $Enums.TransactionType
    quantity?: Decimal | DecimalJsLike | number | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    assetType?: $Enums.AssetType | null
    code?: string | null
    name?: string | null
    tnxType: $Enums.TransactionType
    quantity?: Decimal | DecimalJsLike | number | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    assetType?: NullableEnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tnxType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    assetType?: NullableEnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tnxType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    assetType?: $Enums.AssetType | null
    code?: string | null
    name?: string | null
    tnxType: $Enums.TransactionType
    quantity?: Decimal | DecimalJsLike | number | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    assetType?: NullableEnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tnxType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    assetType?: NullableEnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tnxType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfPortfolioCreateInput = {
    id?: string
    latestNav?: Decimal | DecimalJsLike | number | string | null
    fundCode: string
    fundName: string
    fundType: $Enums.FundType
    units: Decimal | DecimalJsLike | number | string
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMfPortfolioInput
  }

  export type MfPortfolioUncheckedCreateInput = {
    id?: string
    userId: string
    latestNav?: Decimal | DecimalJsLike | number | string | null
    fundCode: string
    fundName: string
    fundType: $Enums.FundType
    units: Decimal | DecimalJsLike | number | string
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfPortfolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latestNav?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMfPortfolioNestedInput
  }

  export type MfPortfolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latestNav?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfPortfolioCreateManyInput = {
    id?: string
    userId: string
    latestNav?: Decimal | DecimalJsLike | number | string | null
    fundCode: string
    fundName: string
    fundType: $Enums.FundType
    units: Decimal | DecimalJsLike | number | string
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfPortfolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latestNav?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfPortfolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latestNav?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfHoldingCreateInput = {
    id?: string
    fundCode: string
    fundName: string
    purchaseDate?: Date | string
    purchaseNav: Decimal | DecimalJsLike | number | string
    units: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMfHoldingInput
  }

  export type MfHoldingUncheckedCreateInput = {
    id?: string
    userId: string
    fundCode: string
    fundName: string
    purchaseDate?: Date | string
    purchaseNav: Decimal | DecimalJsLike | number | string
    units: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type MfHoldingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMfHoldingNestedInput
  }

  export type MfHoldingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfHoldingCreateManyInput = {
    id?: string
    userId: string
    fundCode: string
    fundName: string
    purchaseDate?: Date | string
    purchaseNav: Decimal | DecimalJsLike | number | string
    units: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type MfHoldingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfHoldingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPortfolioCreateInput = {
    id?: string
    symbol: string
    stockName: string
    availableQty: number
    latestPrice?: Decimal | DecimalJsLike | number | string | null
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStockPortfolioInput
  }

  export type StockPortfolioUncheckedCreateInput = {
    id?: string
    userId: string
    symbol: string
    stockName: string
    availableQty: number
    latestPrice?: Decimal | DecimalJsLike | number | string | null
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockPortfolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    availableQty?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStockPortfolioNestedInput
  }

  export type StockPortfolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    availableQty?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPortfolioCreateManyInput = {
    id?: string
    userId: string
    symbol: string
    stockName: string
    availableQty: number
    latestPrice?: Decimal | DecimalJsLike | number | string | null
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockPortfolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    availableQty?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPortfolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    availableQty?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHoldingCreateInput = {
    id?: string
    symbol: string
    stockName: string
    investmentAmt: Decimal | DecimalJsLike | number | string
    quantity?: number
    purchaseDate?: Date | string
    purchasePrice: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStockHoldingsInput
  }

  export type StockHoldingUncheckedCreateInput = {
    id?: string
    userId: string
    symbol: string
    stockName: string
    investmentAmt: Decimal | DecimalJsLike | number | string
    quantity?: number
    purchaseDate?: Date | string
    purchasePrice: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockHoldingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    investmentAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStockHoldingsNestedInput
  }

  export type StockHoldingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    investmentAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHoldingCreateManyInput = {
    id?: string
    userId: string
    symbol: string
    stockName: string
    investmentAmt: Decimal | DecimalJsLike | number | string
    quantity?: number
    purchaseDate?: Date | string
    purchasePrice: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockHoldingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    investmentAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHoldingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    investmentAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPortfolioCreateInput = {
    id?: string
    portfolioType: $Enums.PortfolioType
    totalInv: Decimal | DecimalJsLike | number | string
    totalMv: Decimal | DecimalJsLike | number | string
    totalPnl?: Decimal | DecimalJsLike | number | string
    totalRoi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPortfolioInput
  }

  export type UserPortfolioUncheckedCreateInput = {
    id?: string
    userId: string
    portfolioType: $Enums.PortfolioType
    totalInv: Decimal | DecimalJsLike | number | string
    totalMv: Decimal | DecimalJsLike | number | string
    totalPnl?: Decimal | DecimalJsLike | number | string
    totalRoi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type UserPortfolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioType?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    totalInv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPortfolioNestedInput
  }

  export type UserPortfolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    portfolioType?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    totalInv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPortfolioCreateManyInput = {
    id?: string
    userId: string
    portfolioType: $Enums.PortfolioType
    totalInv: Decimal | DecimalJsLike | number | string
    totalMv: Decimal | DecimalJsLike | number | string
    totalPnl?: Decimal | DecimalJsLike | number | string
    totalRoi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type UserPortfolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioType?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    totalInv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPortfolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    portfolioType?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    totalInv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type MfPortfolioListRelationFilter = {
    every?: MfPortfolioWhereInput
    some?: MfPortfolioWhereInput
    none?: MfPortfolioWhereInput
  }

  export type MfHoldingListRelationFilter = {
    every?: MfHoldingWhereInput
    some?: MfHoldingWhereInput
    none?: MfHoldingWhereInput
  }

  export type StockPortfolioListRelationFilter = {
    every?: StockPortfolioWhereInput
    some?: StockPortfolioWhereInput
    none?: StockPortfolioWhereInput
  }

  export type StockHoldingListRelationFilter = {
    every?: StockHoldingWhereInput
    some?: StockHoldingWhereInput
    none?: StockHoldingWhereInput
  }

  export type UserPortfolioListRelationFilter = {
    every?: UserPortfolioWhereInput
    some?: UserPortfolioWhereInput
    none?: UserPortfolioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MfPortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MfHoldingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockPortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockHoldingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAssetTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssetType[] | null
    notIn?: $Enums.AssetType[] | null
    not?: NestedEnumAssetTypeNullableFilter<$PrismaModel> | $Enums.AssetType | null
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionOrderByRelevanceInput = {
    fields: TransactionOrderByRelevanceFieldEnum | TransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    assetType?: SortOrder
    code?: SortOrder
    name?: SortOrder
    tnxType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    assetType?: SortOrder
    code?: SortOrder
    name?: SortOrder
    tnxType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    assetType?: SortOrder
    code?: SortOrder
    name?: SortOrder
    tnxType?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type EnumAssetTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssetType[] | null
    notIn?: $Enums.AssetType[] | null
    not?: NestedEnumAssetTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AssetType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeNullableFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumFundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeFilter<$PrismaModel> | $Enums.FundType
  }

  export type MfPortfolioOrderByRelevanceInput = {
    fields: MfPortfolioOrderByRelevanceFieldEnum | MfPortfolioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MfPortfolioUserIdFundCodeCompoundUniqueInput = {
    userId: string
    fundCode: string
  }

  export type MfPortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latestNav?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    fundType?: SortOrder
    units?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfPortfolioAvgOrderByAggregateInput = {
    latestNav?: SortOrder
    units?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
  }

  export type MfPortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latestNav?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    fundType?: SortOrder
    units?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfPortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latestNav?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    fundType?: SortOrder
    units?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfPortfolioSumOrderByAggregateInput = {
    latestNav?: SortOrder
    units?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
  }

  export type EnumFundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeWithAggregatesFilter<$PrismaModel> | $Enums.FundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFundTypeFilter<$PrismaModel>
    _max?: NestedEnumFundTypeFilter<$PrismaModel>
  }

  export type MfHoldingOrderByRelevanceInput = {
    fields: MfHoldingOrderByRelevanceFieldEnum | MfHoldingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MfHoldingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    purchaseDate?: SortOrder
    purchaseNav?: SortOrder
    units?: SortOrder
    amount?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfHoldingAvgOrderByAggregateInput = {
    purchaseNav?: SortOrder
    units?: SortOrder
    amount?: SortOrder
  }

  export type MfHoldingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    purchaseDate?: SortOrder
    purchaseNav?: SortOrder
    units?: SortOrder
    amount?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfHoldingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundCode?: SortOrder
    fundName?: SortOrder
    purchaseDate?: SortOrder
    purchaseNav?: SortOrder
    units?: SortOrder
    amount?: SortOrder
    updatedAt?: SortOrder
  }

  export type MfHoldingSumOrderByAggregateInput = {
    purchaseNav?: SortOrder
    units?: SortOrder
    amount?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StockPortfolioOrderByRelevanceInput = {
    fields: StockPortfolioOrderByRelevanceFieldEnum | StockPortfolioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StockPortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    availableQty?: SortOrder
    latestPrice?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockPortfolioAvgOrderByAggregateInput = {
    availableQty?: SortOrder
    latestPrice?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
  }

  export type StockPortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    availableQty?: SortOrder
    latestPrice?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockPortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    availableQty?: SortOrder
    latestPrice?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockPortfolioSumOrderByAggregateInput = {
    availableQty?: SortOrder
    latestPrice?: SortOrder
    investedAmt?: SortOrder
    marketValue?: SortOrder
    pnl?: SortOrder
    roi?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StockHoldingOrderByRelevanceInput = {
    fields: StockHoldingOrderByRelevanceFieldEnum | StockHoldingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StockHoldingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    investmentAmt?: SortOrder
    quantity?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockHoldingAvgOrderByAggregateInput = {
    investmentAmt?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
  }

  export type StockHoldingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    investmentAmt?: SortOrder
    quantity?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockHoldingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symbol?: SortOrder
    stockName?: SortOrder
    investmentAmt?: SortOrder
    quantity?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockHoldingSumOrderByAggregateInput = {
    investmentAmt?: SortOrder
    quantity?: SortOrder
    purchasePrice?: SortOrder
  }

  export type EnumPortfolioTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[]
    notIn?: $Enums.PortfolioType[]
    not?: NestedEnumPortfolioTypeFilter<$PrismaModel> | $Enums.PortfolioType
  }

  export type UserPortfolioOrderByRelevanceInput = {
    fields: UserPortfolioOrderByRelevanceFieldEnum | UserPortfolioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserPortfolioUserIdPortfolioTypeCompoundUniqueInput = {
    userId: string
    portfolioType: $Enums.PortfolioType
  }

  export type UserPortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    portfolioType?: SortOrder
    totalInv?: SortOrder
    totalMv?: SortOrder
    totalPnl?: SortOrder
    totalRoi?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPortfolioAvgOrderByAggregateInput = {
    totalInv?: SortOrder
    totalMv?: SortOrder
    totalPnl?: SortOrder
    totalRoi?: SortOrder
  }

  export type UserPortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    portfolioType?: SortOrder
    totalInv?: SortOrder
    totalMv?: SortOrder
    totalPnl?: SortOrder
    totalRoi?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    portfolioType?: SortOrder
    totalInv?: SortOrder
    totalMv?: SortOrder
    totalPnl?: SortOrder
    totalRoi?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPortfolioSumOrderByAggregateInput = {
    totalInv?: SortOrder
    totalMv?: SortOrder
    totalPnl?: SortOrder
    totalRoi?: SortOrder
  }

  export type EnumPortfolioTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[]
    notIn?: $Enums.PortfolioType[]
    not?: NestedEnumPortfolioTypeWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioTypeFilter<$PrismaModel>
    _max?: NestedEnumPortfolioTypeFilter<$PrismaModel>
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MfPortfolioCreateNestedManyWithoutUserInput = {
    create?: XOR<MfPortfolioCreateWithoutUserInput, MfPortfolioUncheckedCreateWithoutUserInput> | MfPortfolioCreateWithoutUserInput[] | MfPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfPortfolioCreateOrConnectWithoutUserInput | MfPortfolioCreateOrConnectWithoutUserInput[]
    createMany?: MfPortfolioCreateManyUserInputEnvelope
    connect?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
  }

  export type MfHoldingCreateNestedManyWithoutUserInput = {
    create?: XOR<MfHoldingCreateWithoutUserInput, MfHoldingUncheckedCreateWithoutUserInput> | MfHoldingCreateWithoutUserInput[] | MfHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfHoldingCreateOrConnectWithoutUserInput | MfHoldingCreateOrConnectWithoutUserInput[]
    createMany?: MfHoldingCreateManyUserInputEnvelope
    connect?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
  }

  export type StockPortfolioCreateNestedManyWithoutUserInput = {
    create?: XOR<StockPortfolioCreateWithoutUserInput, StockPortfolioUncheckedCreateWithoutUserInput> | StockPortfolioCreateWithoutUserInput[] | StockPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockPortfolioCreateOrConnectWithoutUserInput | StockPortfolioCreateOrConnectWithoutUserInput[]
    createMany?: StockPortfolioCreateManyUserInputEnvelope
    connect?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
  }

  export type StockHoldingCreateNestedManyWithoutUserInput = {
    create?: XOR<StockHoldingCreateWithoutUserInput, StockHoldingUncheckedCreateWithoutUserInput> | StockHoldingCreateWithoutUserInput[] | StockHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockHoldingCreateOrConnectWithoutUserInput | StockHoldingCreateOrConnectWithoutUserInput[]
    createMany?: StockHoldingCreateManyUserInputEnvelope
    connect?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
  }

  export type UserPortfolioCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPortfolioCreateWithoutUserInput, UserPortfolioUncheckedCreateWithoutUserInput> | UserPortfolioCreateWithoutUserInput[] | UserPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPortfolioCreateOrConnectWithoutUserInput | UserPortfolioCreateOrConnectWithoutUserInput[]
    createMany?: UserPortfolioCreateManyUserInputEnvelope
    connect?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MfPortfolioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MfPortfolioCreateWithoutUserInput, MfPortfolioUncheckedCreateWithoutUserInput> | MfPortfolioCreateWithoutUserInput[] | MfPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfPortfolioCreateOrConnectWithoutUserInput | MfPortfolioCreateOrConnectWithoutUserInput[]
    createMany?: MfPortfolioCreateManyUserInputEnvelope
    connect?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
  }

  export type MfHoldingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MfHoldingCreateWithoutUserInput, MfHoldingUncheckedCreateWithoutUserInput> | MfHoldingCreateWithoutUserInput[] | MfHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfHoldingCreateOrConnectWithoutUserInput | MfHoldingCreateOrConnectWithoutUserInput[]
    createMany?: MfHoldingCreateManyUserInputEnvelope
    connect?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
  }

  export type StockPortfolioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StockPortfolioCreateWithoutUserInput, StockPortfolioUncheckedCreateWithoutUserInput> | StockPortfolioCreateWithoutUserInput[] | StockPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockPortfolioCreateOrConnectWithoutUserInput | StockPortfolioCreateOrConnectWithoutUserInput[]
    createMany?: StockPortfolioCreateManyUserInputEnvelope
    connect?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
  }

  export type StockHoldingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StockHoldingCreateWithoutUserInput, StockHoldingUncheckedCreateWithoutUserInput> | StockHoldingCreateWithoutUserInput[] | StockHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockHoldingCreateOrConnectWithoutUserInput | StockHoldingCreateOrConnectWithoutUserInput[]
    createMany?: StockHoldingCreateManyUserInputEnvelope
    connect?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
  }

  export type UserPortfolioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPortfolioCreateWithoutUserInput, UserPortfolioUncheckedCreateWithoutUserInput> | UserPortfolioCreateWithoutUserInput[] | UserPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPortfolioCreateOrConnectWithoutUserInput | UserPortfolioCreateOrConnectWithoutUserInput[]
    createMany?: UserPortfolioCreateManyUserInputEnvelope
    connect?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MfPortfolioUpdateManyWithoutUserNestedInput = {
    create?: XOR<MfPortfolioCreateWithoutUserInput, MfPortfolioUncheckedCreateWithoutUserInput> | MfPortfolioCreateWithoutUserInput[] | MfPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfPortfolioCreateOrConnectWithoutUserInput | MfPortfolioCreateOrConnectWithoutUserInput[]
    upsert?: MfPortfolioUpsertWithWhereUniqueWithoutUserInput | MfPortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MfPortfolioCreateManyUserInputEnvelope
    set?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    disconnect?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    delete?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    connect?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    update?: MfPortfolioUpdateWithWhereUniqueWithoutUserInput | MfPortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MfPortfolioUpdateManyWithWhereWithoutUserInput | MfPortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MfPortfolioScalarWhereInput | MfPortfolioScalarWhereInput[]
  }

  export type MfHoldingUpdateManyWithoutUserNestedInput = {
    create?: XOR<MfHoldingCreateWithoutUserInput, MfHoldingUncheckedCreateWithoutUserInput> | MfHoldingCreateWithoutUserInput[] | MfHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfHoldingCreateOrConnectWithoutUserInput | MfHoldingCreateOrConnectWithoutUserInput[]
    upsert?: MfHoldingUpsertWithWhereUniqueWithoutUserInput | MfHoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MfHoldingCreateManyUserInputEnvelope
    set?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    disconnect?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    delete?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    connect?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    update?: MfHoldingUpdateWithWhereUniqueWithoutUserInput | MfHoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MfHoldingUpdateManyWithWhereWithoutUserInput | MfHoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MfHoldingScalarWhereInput | MfHoldingScalarWhereInput[]
  }

  export type StockPortfolioUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockPortfolioCreateWithoutUserInput, StockPortfolioUncheckedCreateWithoutUserInput> | StockPortfolioCreateWithoutUserInput[] | StockPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockPortfolioCreateOrConnectWithoutUserInput | StockPortfolioCreateOrConnectWithoutUserInput[]
    upsert?: StockPortfolioUpsertWithWhereUniqueWithoutUserInput | StockPortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockPortfolioCreateManyUserInputEnvelope
    set?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    disconnect?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    delete?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    connect?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    update?: StockPortfolioUpdateWithWhereUniqueWithoutUserInput | StockPortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockPortfolioUpdateManyWithWhereWithoutUserInput | StockPortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockPortfolioScalarWhereInput | StockPortfolioScalarWhereInput[]
  }

  export type StockHoldingUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockHoldingCreateWithoutUserInput, StockHoldingUncheckedCreateWithoutUserInput> | StockHoldingCreateWithoutUserInput[] | StockHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockHoldingCreateOrConnectWithoutUserInput | StockHoldingCreateOrConnectWithoutUserInput[]
    upsert?: StockHoldingUpsertWithWhereUniqueWithoutUserInput | StockHoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockHoldingCreateManyUserInputEnvelope
    set?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    disconnect?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    delete?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    connect?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    update?: StockHoldingUpdateWithWhereUniqueWithoutUserInput | StockHoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockHoldingUpdateManyWithWhereWithoutUserInput | StockHoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockHoldingScalarWhereInput | StockHoldingScalarWhereInput[]
  }

  export type UserPortfolioUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPortfolioCreateWithoutUserInput, UserPortfolioUncheckedCreateWithoutUserInput> | UserPortfolioCreateWithoutUserInput[] | UserPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPortfolioCreateOrConnectWithoutUserInput | UserPortfolioCreateOrConnectWithoutUserInput[]
    upsert?: UserPortfolioUpsertWithWhereUniqueWithoutUserInput | UserPortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPortfolioCreateManyUserInputEnvelope
    set?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    disconnect?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    delete?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    connect?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    update?: UserPortfolioUpdateWithWhereUniqueWithoutUserInput | UserPortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPortfolioUpdateManyWithWhereWithoutUserInput | UserPortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPortfolioScalarWhereInput | UserPortfolioScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MfPortfolioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MfPortfolioCreateWithoutUserInput, MfPortfolioUncheckedCreateWithoutUserInput> | MfPortfolioCreateWithoutUserInput[] | MfPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfPortfolioCreateOrConnectWithoutUserInput | MfPortfolioCreateOrConnectWithoutUserInput[]
    upsert?: MfPortfolioUpsertWithWhereUniqueWithoutUserInput | MfPortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MfPortfolioCreateManyUserInputEnvelope
    set?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    disconnect?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    delete?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    connect?: MfPortfolioWhereUniqueInput | MfPortfolioWhereUniqueInput[]
    update?: MfPortfolioUpdateWithWhereUniqueWithoutUserInput | MfPortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MfPortfolioUpdateManyWithWhereWithoutUserInput | MfPortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MfPortfolioScalarWhereInput | MfPortfolioScalarWhereInput[]
  }

  export type MfHoldingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MfHoldingCreateWithoutUserInput, MfHoldingUncheckedCreateWithoutUserInput> | MfHoldingCreateWithoutUserInput[] | MfHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MfHoldingCreateOrConnectWithoutUserInput | MfHoldingCreateOrConnectWithoutUserInput[]
    upsert?: MfHoldingUpsertWithWhereUniqueWithoutUserInput | MfHoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MfHoldingCreateManyUserInputEnvelope
    set?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    disconnect?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    delete?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    connect?: MfHoldingWhereUniqueInput | MfHoldingWhereUniqueInput[]
    update?: MfHoldingUpdateWithWhereUniqueWithoutUserInput | MfHoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MfHoldingUpdateManyWithWhereWithoutUserInput | MfHoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MfHoldingScalarWhereInput | MfHoldingScalarWhereInput[]
  }

  export type StockPortfolioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockPortfolioCreateWithoutUserInput, StockPortfolioUncheckedCreateWithoutUserInput> | StockPortfolioCreateWithoutUserInput[] | StockPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockPortfolioCreateOrConnectWithoutUserInput | StockPortfolioCreateOrConnectWithoutUserInput[]
    upsert?: StockPortfolioUpsertWithWhereUniqueWithoutUserInput | StockPortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockPortfolioCreateManyUserInputEnvelope
    set?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    disconnect?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    delete?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    connect?: StockPortfolioWhereUniqueInput | StockPortfolioWhereUniqueInput[]
    update?: StockPortfolioUpdateWithWhereUniqueWithoutUserInput | StockPortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockPortfolioUpdateManyWithWhereWithoutUserInput | StockPortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockPortfolioScalarWhereInput | StockPortfolioScalarWhereInput[]
  }

  export type StockHoldingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StockHoldingCreateWithoutUserInput, StockHoldingUncheckedCreateWithoutUserInput> | StockHoldingCreateWithoutUserInput[] | StockHoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StockHoldingCreateOrConnectWithoutUserInput | StockHoldingCreateOrConnectWithoutUserInput[]
    upsert?: StockHoldingUpsertWithWhereUniqueWithoutUserInput | StockHoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StockHoldingCreateManyUserInputEnvelope
    set?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    disconnect?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    delete?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    connect?: StockHoldingWhereUniqueInput | StockHoldingWhereUniqueInput[]
    update?: StockHoldingUpdateWithWhereUniqueWithoutUserInput | StockHoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StockHoldingUpdateManyWithWhereWithoutUserInput | StockHoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StockHoldingScalarWhereInput | StockHoldingScalarWhereInput[]
  }

  export type UserPortfolioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPortfolioCreateWithoutUserInput, UserPortfolioUncheckedCreateWithoutUserInput> | UserPortfolioCreateWithoutUserInput[] | UserPortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPortfolioCreateOrConnectWithoutUserInput | UserPortfolioCreateOrConnectWithoutUserInput[]
    upsert?: UserPortfolioUpsertWithWhereUniqueWithoutUserInput | UserPortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPortfolioCreateManyUserInputEnvelope
    set?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    disconnect?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    delete?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    connect?: UserPortfolioWhereUniqueInput | UserPortfolioWhereUniqueInput[]
    update?: UserPortfolioUpdateWithWhereUniqueWithoutUserInput | UserPortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPortfolioUpdateManyWithWhereWithoutUserInput | UserPortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPortfolioScalarWhereInput | UserPortfolioScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType | null
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutMfPortfolioInput = {
    create?: XOR<UserCreateWithoutMfPortfolioInput, UserUncheckedCreateWithoutMfPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutMfPortfolioInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFundTypeFieldUpdateOperationsInput = {
    set?: $Enums.FundType
  }

  export type UserUpdateOneRequiredWithoutMfPortfolioNestedInput = {
    create?: XOR<UserCreateWithoutMfPortfolioInput, UserUncheckedCreateWithoutMfPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutMfPortfolioInput
    upsert?: UserUpsertWithoutMfPortfolioInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMfPortfolioInput, UserUpdateWithoutMfPortfolioInput>, UserUncheckedUpdateWithoutMfPortfolioInput>
  }

  export type UserCreateNestedOneWithoutMfHoldingInput = {
    create?: XOR<UserCreateWithoutMfHoldingInput, UserUncheckedCreateWithoutMfHoldingInput>
    connectOrCreate?: UserCreateOrConnectWithoutMfHoldingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMfHoldingNestedInput = {
    create?: XOR<UserCreateWithoutMfHoldingInput, UserUncheckedCreateWithoutMfHoldingInput>
    connectOrCreate?: UserCreateOrConnectWithoutMfHoldingInput
    upsert?: UserUpsertWithoutMfHoldingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMfHoldingInput, UserUpdateWithoutMfHoldingInput>, UserUncheckedUpdateWithoutMfHoldingInput>
  }

  export type UserCreateNestedOneWithoutStockPortfolioInput = {
    create?: XOR<UserCreateWithoutStockPortfolioInput, UserUncheckedCreateWithoutStockPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockPortfolioInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStockPortfolioNestedInput = {
    create?: XOR<UserCreateWithoutStockPortfolioInput, UserUncheckedCreateWithoutStockPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockPortfolioInput
    upsert?: UserUpsertWithoutStockPortfolioInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStockPortfolioInput, UserUpdateWithoutStockPortfolioInput>, UserUncheckedUpdateWithoutStockPortfolioInput>
  }

  export type UserCreateNestedOneWithoutStockHoldingsInput = {
    create?: XOR<UserCreateWithoutStockHoldingsInput, UserUncheckedCreateWithoutStockHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockHoldingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStockHoldingsNestedInput = {
    create?: XOR<UserCreateWithoutStockHoldingsInput, UserUncheckedCreateWithoutStockHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockHoldingsInput
    upsert?: UserUpsertWithoutStockHoldingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStockHoldingsInput, UserUpdateWithoutStockHoldingsInput>, UserUncheckedUpdateWithoutStockHoldingsInput>
  }

  export type UserCreateNestedOneWithoutUserPortfolioInput = {
    create?: XOR<UserCreateWithoutUserPortfolioInput, UserUncheckedCreateWithoutUserPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPortfolioInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPortfolioTypeFieldUpdateOperationsInput = {
    set?: $Enums.PortfolioType
  }

  export type UserUpdateOneRequiredWithoutUserPortfolioNestedInput = {
    create?: XOR<UserCreateWithoutUserPortfolioInput, UserUncheckedCreateWithoutUserPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPortfolioInput
    upsert?: UserUpsertWithoutUserPortfolioInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPortfolioInput, UserUpdateWithoutUserPortfolioInput>, UserUncheckedUpdateWithoutUserPortfolioInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAssetTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssetType[] | null
    notIn?: $Enums.AssetType[] | null
    not?: NestedEnumAssetTypeNullableFilter<$PrismaModel> | $Enums.AssetType | null
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumAssetTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssetType[] | null
    notIn?: $Enums.AssetType[] | null
    not?: NestedEnumAssetTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AssetType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumFundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeFilter<$PrismaModel> | $Enums.FundType
  }

  export type NestedEnumFundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeWithAggregatesFilter<$PrismaModel> | $Enums.FundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFundTypeFilter<$PrismaModel>
    _max?: NestedEnumFundTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPortfolioTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[]
    notIn?: $Enums.PortfolioType[]
    not?: NestedEnumPortfolioTypeFilter<$PrismaModel> | $Enums.PortfolioType
  }

  export type NestedEnumPortfolioTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioType | EnumPortfolioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioType[]
    notIn?: $Enums.PortfolioType[]
    not?: NestedEnumPortfolioTypeWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioTypeFilter<$PrismaModel>
    _max?: NestedEnumPortfolioTypeFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    assetType?: $Enums.AssetType | null
    code?: string | null
    name?: string | null
    tnxType: $Enums.TransactionType
    quantity?: Decimal | DecimalJsLike | number | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    assetType?: $Enums.AssetType | null
    code?: string | null
    name?: string | null
    tnxType: $Enums.TransactionType
    quantity?: Decimal | DecimalJsLike | number | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MfPortfolioCreateWithoutUserInput = {
    id?: string
    latestNav?: Decimal | DecimalJsLike | number | string | null
    fundCode: string
    fundName: string
    fundType: $Enums.FundType
    units: Decimal | DecimalJsLike | number | string
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfPortfolioUncheckedCreateWithoutUserInput = {
    id?: string
    latestNav?: Decimal | DecimalJsLike | number | string | null
    fundCode: string
    fundName: string
    fundType: $Enums.FundType
    units: Decimal | DecimalJsLike | number | string
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfPortfolioCreateOrConnectWithoutUserInput = {
    where: MfPortfolioWhereUniqueInput
    create: XOR<MfPortfolioCreateWithoutUserInput, MfPortfolioUncheckedCreateWithoutUserInput>
  }

  export type MfPortfolioCreateManyUserInputEnvelope = {
    data: MfPortfolioCreateManyUserInput | MfPortfolioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MfHoldingCreateWithoutUserInput = {
    id?: string
    fundCode: string
    fundName: string
    purchaseDate?: Date | string
    purchaseNav: Decimal | DecimalJsLike | number | string
    units: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type MfHoldingUncheckedCreateWithoutUserInput = {
    id?: string
    fundCode: string
    fundName: string
    purchaseDate?: Date | string
    purchaseNav: Decimal | DecimalJsLike | number | string
    units: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type MfHoldingCreateOrConnectWithoutUserInput = {
    where: MfHoldingWhereUniqueInput
    create: XOR<MfHoldingCreateWithoutUserInput, MfHoldingUncheckedCreateWithoutUserInput>
  }

  export type MfHoldingCreateManyUserInputEnvelope = {
    data: MfHoldingCreateManyUserInput | MfHoldingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StockPortfolioCreateWithoutUserInput = {
    id?: string
    symbol: string
    stockName: string
    availableQty: number
    latestPrice?: Decimal | DecimalJsLike | number | string | null
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockPortfolioUncheckedCreateWithoutUserInput = {
    id?: string
    symbol: string
    stockName: string
    availableQty: number
    latestPrice?: Decimal | DecimalJsLike | number | string | null
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockPortfolioCreateOrConnectWithoutUserInput = {
    where: StockPortfolioWhereUniqueInput
    create: XOR<StockPortfolioCreateWithoutUserInput, StockPortfolioUncheckedCreateWithoutUserInput>
  }

  export type StockPortfolioCreateManyUserInputEnvelope = {
    data: StockPortfolioCreateManyUserInput | StockPortfolioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StockHoldingCreateWithoutUserInput = {
    id?: string
    symbol: string
    stockName: string
    investmentAmt: Decimal | DecimalJsLike | number | string
    quantity?: number
    purchaseDate?: Date | string
    purchasePrice: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockHoldingUncheckedCreateWithoutUserInput = {
    id?: string
    symbol: string
    stockName: string
    investmentAmt: Decimal | DecimalJsLike | number | string
    quantity?: number
    purchaseDate?: Date | string
    purchasePrice: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockHoldingCreateOrConnectWithoutUserInput = {
    where: StockHoldingWhereUniqueInput
    create: XOR<StockHoldingCreateWithoutUserInput, StockHoldingUncheckedCreateWithoutUserInput>
  }

  export type StockHoldingCreateManyUserInputEnvelope = {
    data: StockHoldingCreateManyUserInput | StockHoldingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPortfolioCreateWithoutUserInput = {
    id?: string
    portfolioType: $Enums.PortfolioType
    totalInv: Decimal | DecimalJsLike | number | string
    totalMv: Decimal | DecimalJsLike | number | string
    totalPnl?: Decimal | DecimalJsLike | number | string
    totalRoi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type UserPortfolioUncheckedCreateWithoutUserInput = {
    id?: string
    portfolioType: $Enums.PortfolioType
    totalInv: Decimal | DecimalJsLike | number | string
    totalMv: Decimal | DecimalJsLike | number | string
    totalPnl?: Decimal | DecimalJsLike | number | string
    totalRoi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type UserPortfolioCreateOrConnectWithoutUserInput = {
    where: UserPortfolioWhereUniqueInput
    create: XOR<UserPortfolioCreateWithoutUserInput, UserPortfolioUncheckedCreateWithoutUserInput>
  }

  export type UserPortfolioCreateManyUserInputEnvelope = {
    data: UserPortfolioCreateManyUserInput | UserPortfolioCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    assetType?: EnumAssetTypeNullableFilter<"Transaction"> | $Enums.AssetType | null
    code?: StringNullableFilter<"Transaction"> | string | null
    name?: StringNullableFilter<"Transaction"> | string | null
    tnxType?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    quantity?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    price?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type MfPortfolioUpsertWithWhereUniqueWithoutUserInput = {
    where: MfPortfolioWhereUniqueInput
    update: XOR<MfPortfolioUpdateWithoutUserInput, MfPortfolioUncheckedUpdateWithoutUserInput>
    create: XOR<MfPortfolioCreateWithoutUserInput, MfPortfolioUncheckedCreateWithoutUserInput>
  }

  export type MfPortfolioUpdateWithWhereUniqueWithoutUserInput = {
    where: MfPortfolioWhereUniqueInput
    data: XOR<MfPortfolioUpdateWithoutUserInput, MfPortfolioUncheckedUpdateWithoutUserInput>
  }

  export type MfPortfolioUpdateManyWithWhereWithoutUserInput = {
    where: MfPortfolioScalarWhereInput
    data: XOR<MfPortfolioUpdateManyMutationInput, MfPortfolioUncheckedUpdateManyWithoutUserInput>
  }

  export type MfPortfolioScalarWhereInput = {
    AND?: MfPortfolioScalarWhereInput | MfPortfolioScalarWhereInput[]
    OR?: MfPortfolioScalarWhereInput[]
    NOT?: MfPortfolioScalarWhereInput | MfPortfolioScalarWhereInput[]
    id?: StringFilter<"MfPortfolio"> | string
    userId?: StringFilter<"MfPortfolio"> | string
    latestNav?: DecimalNullableFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFilter<"MfPortfolio"> | string
    fundName?: StringFilter<"MfPortfolio"> | string
    fundType?: EnumFundTypeFilter<"MfPortfolio"> | $Enums.FundType
    units?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalFilter<"MfPortfolio"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MfPortfolio"> | Date | string
    updatedAt?: DateTimeFilter<"MfPortfolio"> | Date | string
  }

  export type MfHoldingUpsertWithWhereUniqueWithoutUserInput = {
    where: MfHoldingWhereUniqueInput
    update: XOR<MfHoldingUpdateWithoutUserInput, MfHoldingUncheckedUpdateWithoutUserInput>
    create: XOR<MfHoldingCreateWithoutUserInput, MfHoldingUncheckedCreateWithoutUserInput>
  }

  export type MfHoldingUpdateWithWhereUniqueWithoutUserInput = {
    where: MfHoldingWhereUniqueInput
    data: XOR<MfHoldingUpdateWithoutUserInput, MfHoldingUncheckedUpdateWithoutUserInput>
  }

  export type MfHoldingUpdateManyWithWhereWithoutUserInput = {
    where: MfHoldingScalarWhereInput
    data: XOR<MfHoldingUpdateManyMutationInput, MfHoldingUncheckedUpdateManyWithoutUserInput>
  }

  export type MfHoldingScalarWhereInput = {
    AND?: MfHoldingScalarWhereInput | MfHoldingScalarWhereInput[]
    OR?: MfHoldingScalarWhereInput[]
    NOT?: MfHoldingScalarWhereInput | MfHoldingScalarWhereInput[]
    id?: StringFilter<"MfHolding"> | string
    userId?: StringFilter<"MfHolding"> | string
    fundCode?: StringFilter<"MfHolding"> | string
    fundName?: StringFilter<"MfHolding"> | string
    purchaseDate?: DateTimeFilter<"MfHolding"> | Date | string
    purchaseNav?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    units?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"MfHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"MfHolding"> | Date | string
  }

  export type StockPortfolioUpsertWithWhereUniqueWithoutUserInput = {
    where: StockPortfolioWhereUniqueInput
    update: XOR<StockPortfolioUpdateWithoutUserInput, StockPortfolioUncheckedUpdateWithoutUserInput>
    create: XOR<StockPortfolioCreateWithoutUserInput, StockPortfolioUncheckedCreateWithoutUserInput>
  }

  export type StockPortfolioUpdateWithWhereUniqueWithoutUserInput = {
    where: StockPortfolioWhereUniqueInput
    data: XOR<StockPortfolioUpdateWithoutUserInput, StockPortfolioUncheckedUpdateWithoutUserInput>
  }

  export type StockPortfolioUpdateManyWithWhereWithoutUserInput = {
    where: StockPortfolioScalarWhereInput
    data: XOR<StockPortfolioUpdateManyMutationInput, StockPortfolioUncheckedUpdateManyWithoutUserInput>
  }

  export type StockPortfolioScalarWhereInput = {
    AND?: StockPortfolioScalarWhereInput | StockPortfolioScalarWhereInput[]
    OR?: StockPortfolioScalarWhereInput[]
    NOT?: StockPortfolioScalarWhereInput | StockPortfolioScalarWhereInput[]
    id?: StringFilter<"StockPortfolio"> | string
    userId?: StringFilter<"StockPortfolio"> | string
    symbol?: StringFilter<"StockPortfolio"> | string
    stockName?: StringFilter<"StockPortfolio"> | string
    availableQty?: IntFilter<"StockPortfolio"> | number
    latestPrice?: DecimalNullableFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    roi?: DecimalFilter<"StockPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"StockPortfolio"> | Date | string
  }

  export type StockHoldingUpsertWithWhereUniqueWithoutUserInput = {
    where: StockHoldingWhereUniqueInput
    update: XOR<StockHoldingUpdateWithoutUserInput, StockHoldingUncheckedUpdateWithoutUserInput>
    create: XOR<StockHoldingCreateWithoutUserInput, StockHoldingUncheckedCreateWithoutUserInput>
  }

  export type StockHoldingUpdateWithWhereUniqueWithoutUserInput = {
    where: StockHoldingWhereUniqueInput
    data: XOR<StockHoldingUpdateWithoutUserInput, StockHoldingUncheckedUpdateWithoutUserInput>
  }

  export type StockHoldingUpdateManyWithWhereWithoutUserInput = {
    where: StockHoldingScalarWhereInput
    data: XOR<StockHoldingUpdateManyMutationInput, StockHoldingUncheckedUpdateManyWithoutUserInput>
  }

  export type StockHoldingScalarWhereInput = {
    AND?: StockHoldingScalarWhereInput | StockHoldingScalarWhereInput[]
    OR?: StockHoldingScalarWhereInput[]
    NOT?: StockHoldingScalarWhereInput | StockHoldingScalarWhereInput[]
    id?: StringFilter<"StockHolding"> | string
    userId?: StringFilter<"StockHolding"> | string
    symbol?: StringFilter<"StockHolding"> | string
    stockName?: StringFilter<"StockHolding"> | string
    investmentAmt?: DecimalFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"StockHolding"> | number
    purchaseDate?: DateTimeFilter<"StockHolding"> | Date | string
    purchasePrice?: DecimalFilter<"StockHolding"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"StockHolding"> | Date | string
  }

  export type UserPortfolioUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPortfolioWhereUniqueInput
    update: XOR<UserPortfolioUpdateWithoutUserInput, UserPortfolioUncheckedUpdateWithoutUserInput>
    create: XOR<UserPortfolioCreateWithoutUserInput, UserPortfolioUncheckedCreateWithoutUserInput>
  }

  export type UserPortfolioUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPortfolioWhereUniqueInput
    data: XOR<UserPortfolioUpdateWithoutUserInput, UserPortfolioUncheckedUpdateWithoutUserInput>
  }

  export type UserPortfolioUpdateManyWithWhereWithoutUserInput = {
    where: UserPortfolioScalarWhereInput
    data: XOR<UserPortfolioUpdateManyMutationInput, UserPortfolioUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPortfolioScalarWhereInput = {
    AND?: UserPortfolioScalarWhereInput | UserPortfolioScalarWhereInput[]
    OR?: UserPortfolioScalarWhereInput[]
    NOT?: UserPortfolioScalarWhereInput | UserPortfolioScalarWhereInput[]
    id?: StringFilter<"UserPortfolio"> | string
    userId?: StringFilter<"UserPortfolio"> | string
    portfolioType?: EnumPortfolioTypeFilter<"UserPortfolio"> | $Enums.PortfolioType
    totalInv?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFilter<"UserPortfolio"> | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFilter<"UserPortfolio"> | Date | string
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mfPortfolio?: MfPortfolioCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mfPortfolio?: MfPortfolioUncheckedCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingUncheckedCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioUncheckedCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingUncheckedCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mfPortfolio?: MfPortfolioUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mfPortfolio?: MfPortfolioUncheckedUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUncheckedUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUncheckedUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUncheckedUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMfPortfolioInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMfPortfolioInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingUncheckedCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioUncheckedCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingUncheckedCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMfPortfolioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMfPortfolioInput, UserUncheckedCreateWithoutMfPortfolioInput>
  }

  export type UserUpsertWithoutMfPortfolioInput = {
    update: XOR<UserUpdateWithoutMfPortfolioInput, UserUncheckedUpdateWithoutMfPortfolioInput>
    create: XOR<UserCreateWithoutMfPortfolioInput, UserUncheckedCreateWithoutMfPortfolioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMfPortfolioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMfPortfolioInput, UserUncheckedUpdateWithoutMfPortfolioInput>
  }

  export type UserUpdateWithoutMfPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMfPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUncheckedUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUncheckedUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUncheckedUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMfHoldingInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMfHoldingInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioUncheckedCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioUncheckedCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingUncheckedCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMfHoldingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMfHoldingInput, UserUncheckedCreateWithoutMfHoldingInput>
  }

  export type UserUpsertWithoutMfHoldingInput = {
    update: XOR<UserUpdateWithoutMfHoldingInput, UserUncheckedUpdateWithoutMfHoldingInput>
    create: XOR<UserCreateWithoutMfHoldingInput, UserUncheckedCreateWithoutMfHoldingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMfHoldingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMfHoldingInput, UserUncheckedUpdateWithoutMfHoldingInput>
  }

  export type UserUpdateWithoutMfHoldingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMfHoldingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUncheckedUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUncheckedUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUncheckedUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStockPortfolioInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStockPortfolioInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioUncheckedCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingUncheckedCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingUncheckedCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStockPortfolioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStockPortfolioInput, UserUncheckedCreateWithoutStockPortfolioInput>
  }

  export type UserUpsertWithoutStockPortfolioInput = {
    update: XOR<UserUpdateWithoutStockPortfolioInput, UserUncheckedUpdateWithoutStockPortfolioInput>
    create: XOR<UserCreateWithoutStockPortfolioInput, UserUncheckedCreateWithoutStockPortfolioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStockPortfolioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStockPortfolioInput, UserUncheckedUpdateWithoutStockPortfolioInput>
  }

  export type UserUpdateWithoutStockPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStockPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUncheckedUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUncheckedUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUncheckedUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStockHoldingsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStockHoldingsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioUncheckedCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingUncheckedCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioUncheckedCreateNestedManyWithoutUserInput
    userPortfolio?: UserPortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStockHoldingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStockHoldingsInput, UserUncheckedCreateWithoutStockHoldingsInput>
  }

  export type UserUpsertWithoutStockHoldingsInput = {
    update: XOR<UserUpdateWithoutStockHoldingsInput, UserUncheckedUpdateWithoutStockHoldingsInput>
    create: XOR<UserCreateWithoutStockHoldingsInput, UserUncheckedCreateWithoutStockHoldingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStockHoldingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStockHoldingsInput, UserUncheckedUpdateWithoutStockHoldingsInput>
  }

  export type UserUpdateWithoutStockHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStockHoldingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUncheckedUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUncheckedUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUncheckedUpdateManyWithoutUserNestedInput
    userPortfolio?: UserPortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserPortfolioInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPortfolioInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    isAdmin?: boolean
    avatar?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    mfPortfolio?: MfPortfolioUncheckedCreateNestedManyWithoutUserInput
    mfHolding?: MfHoldingUncheckedCreateNestedManyWithoutUserInput
    stockPortfolio?: StockPortfolioUncheckedCreateNestedManyWithoutUserInput
    stockHoldings?: StockHoldingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPortfolioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPortfolioInput, UserUncheckedCreateWithoutUserPortfolioInput>
  }

  export type UserUpsertWithoutUserPortfolioInput = {
    update: XOR<UserUpdateWithoutUserPortfolioInput, UserUncheckedUpdateWithoutUserPortfolioInput>
    create: XOR<UserCreateWithoutUserPortfolioInput, UserUncheckedCreateWithoutUserPortfolioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPortfolioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPortfolioInput, UserUncheckedUpdateWithoutUserPortfolioInput>
  }

  export type UserUpdateWithoutUserPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    mfPortfolio?: MfPortfolioUncheckedUpdateManyWithoutUserNestedInput
    mfHolding?: MfHoldingUncheckedUpdateManyWithoutUserNestedInput
    stockPortfolio?: StockPortfolioUncheckedUpdateManyWithoutUserNestedInput
    stockHoldings?: StockHoldingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    assetType?: $Enums.AssetType | null
    code?: string | null
    name?: string | null
    tnxType: $Enums.TransactionType
    quantity?: Decimal | DecimalJsLike | number | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type MfPortfolioCreateManyUserInput = {
    id?: string
    latestNav?: Decimal | DecimalJsLike | number | string | null
    fundCode: string
    fundName: string
    fundType: $Enums.FundType
    units: Decimal | DecimalJsLike | number | string
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfHoldingCreateManyUserInput = {
    id?: string
    fundCode: string
    fundName: string
    purchaseDate?: Date | string
    purchaseNav: Decimal | DecimalJsLike | number | string
    units: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockPortfolioCreateManyUserInput = {
    id?: string
    symbol: string
    stockName: string
    availableQty: number
    latestPrice?: Decimal | DecimalJsLike | number | string | null
    investedAmt: Decimal | DecimalJsLike | number | string
    marketValue: Decimal | DecimalJsLike | number | string
    pnl?: Decimal | DecimalJsLike | number | string
    roi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type StockHoldingCreateManyUserInput = {
    id?: string
    symbol: string
    stockName: string
    investmentAmt: Decimal | DecimalJsLike | number | string
    quantity?: number
    purchaseDate?: Date | string
    purchasePrice: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type UserPortfolioCreateManyUserInput = {
    id?: string
    portfolioType: $Enums.PortfolioType
    totalInv: Decimal | DecimalJsLike | number | string
    totalMv: Decimal | DecimalJsLike | number | string
    totalPnl?: Decimal | DecimalJsLike | number | string
    totalRoi?: Decimal | DecimalJsLike | number | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    assetType?: NullableEnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tnxType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    assetType?: NullableEnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tnxType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    assetType?: NullableEnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    tnxType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfPortfolioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latestNav?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfPortfolioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latestNav?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfPortfolioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latestNav?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfHoldingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfHoldingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfHoldingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundCode?: StringFieldUpdateOperationsInput | string
    fundName?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPortfolioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    availableQty?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPortfolioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    availableQty?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockPortfolioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    availableQty?: IntFieldUpdateOperationsInput | number
    latestPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    investedAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marketValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    roi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHoldingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    investmentAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHoldingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    investmentAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHoldingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    stockName?: StringFieldUpdateOperationsInput | string
    investmentAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPortfolioUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioType?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    totalInv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPortfolioUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioType?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    totalInv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPortfolioUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioType?: EnumPortfolioTypeFieldUpdateOperationsInput | $Enums.PortfolioType
    totalInv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalMv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalRoi?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}