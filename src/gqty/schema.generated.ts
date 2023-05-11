/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
}

/** Ordering options for Car connections */
export interface CarOrder {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Cars. */
  field: CarOrderField;
}

/** Properties by which Car connections can be ordered. */
export enum CarOrderField {
  brand = "brand",
}

/**
 * CarWhereInput is used for filtering Car objects.
 * Input was generated by ent.
 */
export interface CarWhereInput {
  and?: InputMaybe<Array<CarWhereInput>>;
  /** brand field predicates */
  brand?: InputMaybe<Scalars["String"]>;
  brandContains?: InputMaybe<Scalars["String"]>;
  brandContainsFold?: InputMaybe<Scalars["String"]>;
  brandEqualFold?: InputMaybe<Scalars["String"]>;
  brandGT?: InputMaybe<Scalars["String"]>;
  brandGTE?: InputMaybe<Scalars["String"]>;
  brandHasPrefix?: InputMaybe<Scalars["String"]>;
  brandHasSuffix?: InputMaybe<Scalars["String"]>;
  brandIn?: InputMaybe<Array<Scalars["String"]>>;
  brandLT?: InputMaybe<Scalars["String"]>;
  brandLTE?: InputMaybe<Scalars["String"]>;
  brandNEQ?: InputMaybe<Scalars["String"]>;
  brandNotIn?: InputMaybe<Array<Scalars["String"]>>;
  /** color field predicates */
  color?: InputMaybe<Scalars["String"]>;
  colorContains?: InputMaybe<Scalars["String"]>;
  colorContainsFold?: InputMaybe<Scalars["String"]>;
  colorEqualFold?: InputMaybe<Scalars["String"]>;
  colorGT?: InputMaybe<Scalars["String"]>;
  colorGTE?: InputMaybe<Scalars["String"]>;
  colorHasPrefix?: InputMaybe<Scalars["String"]>;
  colorHasSuffix?: InputMaybe<Scalars["String"]>;
  colorIn?: InputMaybe<Array<Scalars["String"]>>;
  colorLT?: InputMaybe<Scalars["String"]>;
  colorLTE?: InputMaybe<Scalars["String"]>;
  colorNEQ?: InputMaybe<Scalars["String"]>;
  colorNotIn?: InputMaybe<Array<Scalars["String"]>>;
  /** create_time field predicates */
  createTime?: InputMaybe<Scalars["Time"]>;
  createTimeGT?: InputMaybe<Scalars["Time"]>;
  createTimeGTE?: InputMaybe<Scalars["Time"]>;
  createTimeIn?: InputMaybe<Array<Scalars["Time"]>>;
  createTimeLT?: InputMaybe<Scalars["Time"]>;
  createTimeLTE?: InputMaybe<Scalars["Time"]>;
  createTimeNEQ?: InputMaybe<Scalars["Time"]>;
  createTimeNotIn?: InputMaybe<Array<Scalars["Time"]>>;
  /** passengers edge predicates */
  hasPassengers?: InputMaybe<Scalars["Boolean"]>;
  hasPassengersWith?: InputMaybe<Array<PassengerWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars["ID"]>;
  idGT?: InputMaybe<Scalars["ID"]>;
  idGTE?: InputMaybe<Scalars["ID"]>;
  idIn?: InputMaybe<Array<Scalars["ID"]>>;
  idLT?: InputMaybe<Scalars["ID"]>;
  idLTE?: InputMaybe<Scalars["ID"]>;
  idNEQ?: InputMaybe<Scalars["ID"]>;
  idNotIn?: InputMaybe<Array<Scalars["ID"]>>;
  not?: InputMaybe<CarWhereInput>;
  or?: InputMaybe<Array<CarWhereInput>>;
  /** update_time field predicates */
  updateTime?: InputMaybe<Scalars["Time"]>;
  updateTimeGT?: InputMaybe<Scalars["Time"]>;
  updateTimeGTE?: InputMaybe<Scalars["Time"]>;
  updateTimeIn?: InputMaybe<Array<Scalars["Time"]>>;
  updateTimeLT?: InputMaybe<Scalars["Time"]>;
  updateTimeLTE?: InputMaybe<Scalars["Time"]>;
  updateTimeNEQ?: InputMaybe<Scalars["Time"]>;
  updateTimeNotIn?: InputMaybe<Array<Scalars["Time"]>>;
}

/**
 * CreateCarInput is used for create Car object.
 * Input was generated by ent.
 */
export interface CreateCarInput {
  brand: Scalars["String"];
  color: Scalars["String"];
  passengerIDs?: InputMaybe<Array<Scalars["ID"]>>;
}

/**
 * CreatePassengerInput is used for create Passenger object.
 * Input was generated by ent.
 */
export interface CreatePassengerInput {
  carID?: InputMaybe<Scalars["ID"]>;
  name: Scalars["String"];
}

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  ASC = "ASC",
  /** Specifies a descending order for a given `orderBy` argument. */
  DESC = "DESC",
}

/** Ordering options for Passenger connections */
export interface PassengerOrder {
  /** The ordering direction. */
  direction?: OrderDirection;
  /** The field by which to order Passengers. */
  field: PassengerOrderField;
}

/** Properties by which Passenger connections can be ordered. */
export enum PassengerOrderField {
  name = "name",
}

/**
 * PassengerWhereInput is used for filtering Passenger objects.
 * Input was generated by ent.
 */
export interface PassengerWhereInput {
  and?: InputMaybe<Array<PassengerWhereInput>>;
  /** create_time field predicates */
  createTime?: InputMaybe<Scalars["Time"]>;
  createTimeGT?: InputMaybe<Scalars["Time"]>;
  createTimeGTE?: InputMaybe<Scalars["Time"]>;
  createTimeIn?: InputMaybe<Array<Scalars["Time"]>>;
  createTimeLT?: InputMaybe<Scalars["Time"]>;
  createTimeLTE?: InputMaybe<Scalars["Time"]>;
  createTimeNEQ?: InputMaybe<Scalars["Time"]>;
  createTimeNotIn?: InputMaybe<Array<Scalars["Time"]>>;
  /** car edge predicates */
  hasCar?: InputMaybe<Scalars["Boolean"]>;
  hasCarWith?: InputMaybe<Array<CarWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars["ID"]>;
  idGT?: InputMaybe<Scalars["ID"]>;
  idGTE?: InputMaybe<Scalars["ID"]>;
  idIn?: InputMaybe<Array<Scalars["ID"]>>;
  idLT?: InputMaybe<Scalars["ID"]>;
  idLTE?: InputMaybe<Scalars["ID"]>;
  idNEQ?: InputMaybe<Scalars["ID"]>;
  idNotIn?: InputMaybe<Array<Scalars["ID"]>>;
  /** name field predicates */
  name?: InputMaybe<Scalars["String"]>;
  nameContains?: InputMaybe<Scalars["String"]>;
  nameContainsFold?: InputMaybe<Scalars["String"]>;
  nameEqualFold?: InputMaybe<Scalars["String"]>;
  nameGT?: InputMaybe<Scalars["String"]>;
  nameGTE?: InputMaybe<Scalars["String"]>;
  nameHasPrefix?: InputMaybe<Scalars["String"]>;
  nameHasSuffix?: InputMaybe<Scalars["String"]>;
  nameIn?: InputMaybe<Array<Scalars["String"]>>;
  nameLT?: InputMaybe<Scalars["String"]>;
  nameLTE?: InputMaybe<Scalars["String"]>;
  nameNEQ?: InputMaybe<Scalars["String"]>;
  nameNotIn?: InputMaybe<Array<Scalars["String"]>>;
  not?: InputMaybe<PassengerWhereInput>;
  or?: InputMaybe<Array<PassengerWhereInput>>;
  /** update_time field predicates */
  updateTime?: InputMaybe<Scalars["Time"]>;
  updateTimeGT?: InputMaybe<Scalars["Time"]>;
  updateTimeGTE?: InputMaybe<Scalars["Time"]>;
  updateTimeIn?: InputMaybe<Array<Scalars["Time"]>>;
  updateTimeLT?: InputMaybe<Scalars["Time"]>;
  updateTimeLTE?: InputMaybe<Scalars["Time"]>;
  updateTimeNEQ?: InputMaybe<Scalars["Time"]>;
  updateTimeNotIn?: InputMaybe<Array<Scalars["Time"]>>;
}

/**
 * UpdateCarInput is used for update Car object.
 * Input was generated by ent.
 */
export interface UpdateCarInput {
  addPassengerIDs?: InputMaybe<Array<Scalars["ID"]>>;
  brand?: InputMaybe<Scalars["String"]>;
  clearPassengers?: InputMaybe<Scalars["Boolean"]>;
  color?: InputMaybe<Scalars["String"]>;
  removePassengerIDs?: InputMaybe<Array<Scalars["ID"]>>;
  updateTime?: InputMaybe<Scalars["Time"]>;
}

/**
 * UpdatePassengerInput is used for update Passenger object.
 * Input was generated by ent.
 */
export interface UpdatePassengerInput {
  carID?: InputMaybe<Scalars["ID"]>;
  clearCar?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  updateTime?: InputMaybe<Scalars["Time"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  CarOrderField: true,
  Float: true,
  ID: true,
  Int: true,
  OrderDirection: true,
  PassengerOrderField: true,
  String: true,
  Time: true,
};
export const generatedSchema = {
  Car: {
    __typename: { __type: "String!" },
    brand: { __type: "String!" },
    color: { __type: "String!" },
    createTime: { __type: "Time!" },
    id: { __type: "ID!" },
    passengers: { __type: "[Passenger!]" },
    updateTime: { __type: "Time!" },
  },
  CarOrder: {
    direction: { __type: "OrderDirection!" },
    field: { __type: "CarOrderField!" },
  },
  CarWhereInput: {
    and: { __type: "[CarWhereInput!]" },
    brand: { __type: "String" },
    brandContains: { __type: "String" },
    brandContainsFold: { __type: "String" },
    brandEqualFold: { __type: "String" },
    brandGT: { __type: "String" },
    brandGTE: { __type: "String" },
    brandHasPrefix: { __type: "String" },
    brandHasSuffix: { __type: "String" },
    brandIn: { __type: "[String!]" },
    brandLT: { __type: "String" },
    brandLTE: { __type: "String" },
    brandNEQ: { __type: "String" },
    brandNotIn: { __type: "[String!]" },
    color: { __type: "String" },
    colorContains: { __type: "String" },
    colorContainsFold: { __type: "String" },
    colorEqualFold: { __type: "String" },
    colorGT: { __type: "String" },
    colorGTE: { __type: "String" },
    colorHasPrefix: { __type: "String" },
    colorHasSuffix: { __type: "String" },
    colorIn: { __type: "[String!]" },
    colorLT: { __type: "String" },
    colorLTE: { __type: "String" },
    colorNEQ: { __type: "String" },
    colorNotIn: { __type: "[String!]" },
    createTime: { __type: "Time" },
    createTimeGT: { __type: "Time" },
    createTimeGTE: { __type: "Time" },
    createTimeIn: { __type: "[Time!]" },
    createTimeLT: { __type: "Time" },
    createTimeLTE: { __type: "Time" },
    createTimeNEQ: { __type: "Time" },
    createTimeNotIn: { __type: "[Time!]" },
    hasPassengers: { __type: "Boolean" },
    hasPassengersWith: { __type: "[PassengerWhereInput!]" },
    id: { __type: "ID" },
    idGT: { __type: "ID" },
    idGTE: { __type: "ID" },
    idIn: { __type: "[ID!]" },
    idLT: { __type: "ID" },
    idLTE: { __type: "ID" },
    idNEQ: { __type: "ID" },
    idNotIn: { __type: "[ID!]" },
    not: { __type: "CarWhereInput" },
    or: { __type: "[CarWhereInput!]" },
    updateTime: { __type: "Time" },
    updateTimeGT: { __type: "Time" },
    updateTimeGTE: { __type: "Time" },
    updateTimeIn: { __type: "[Time!]" },
    updateTimeLT: { __type: "Time" },
    updateTimeLTE: { __type: "Time" },
    updateTimeNEQ: { __type: "Time" },
    updateTimeNotIn: { __type: "[Time!]" },
  },
  CreateCarInput: {
    brand: { __type: "String!" },
    color: { __type: "String!" },
    passengerIDs: { __type: "[ID!]" },
  },
  CreatePassengerInput: {
    carID: { __type: "ID" },
    name: { __type: "String!" },
  },
  Passenger: {
    __typename: { __type: "String!" },
    car: { __type: "Car" },
    createTime: { __type: "Time!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    updateTime: { __type: "Time!" },
  },
  PassengerOrder: {
    direction: { __type: "OrderDirection!" },
    field: { __type: "PassengerOrderField!" },
  },
  PassengerWhereInput: {
    and: { __type: "[PassengerWhereInput!]" },
    createTime: { __type: "Time" },
    createTimeGT: { __type: "Time" },
    createTimeGTE: { __type: "Time" },
    createTimeIn: { __type: "[Time!]" },
    createTimeLT: { __type: "Time" },
    createTimeLTE: { __type: "Time" },
    createTimeNEQ: { __type: "Time" },
    createTimeNotIn: { __type: "[Time!]" },
    hasCar: { __type: "Boolean" },
    hasCarWith: { __type: "[CarWhereInput!]" },
    id: { __type: "ID" },
    idGT: { __type: "ID" },
    idGTE: { __type: "ID" },
    idIn: { __type: "[ID!]" },
    idLT: { __type: "ID" },
    idLTE: { __type: "ID" },
    idNEQ: { __type: "ID" },
    idNotIn: { __type: "[ID!]" },
    name: { __type: "String" },
    nameContains: { __type: "String" },
    nameContainsFold: { __type: "String" },
    nameEqualFold: { __type: "String" },
    nameGT: { __type: "String" },
    nameGTE: { __type: "String" },
    nameHasPrefix: { __type: "String" },
    nameHasSuffix: { __type: "String" },
    nameIn: { __type: "[String!]" },
    nameLT: { __type: "String" },
    nameLTE: { __type: "String" },
    nameNEQ: { __type: "String" },
    nameNotIn: { __type: "[String!]" },
    not: { __type: "PassengerWhereInput" },
    or: { __type: "[PassengerWhereInput!]" },
    updateTime: { __type: "Time" },
    updateTimeGT: { __type: "Time" },
    updateTimeGTE: { __type: "Time" },
    updateTimeIn: { __type: "[Time!]" },
    updateTimeLT: { __type: "Time" },
    updateTimeLTE: { __type: "Time" },
    updateTimeNEQ: { __type: "Time" },
    updateTimeNotIn: { __type: "[Time!]" },
  },
  UpdateCarInput: {
    addPassengerIDs: { __type: "[ID!]" },
    brand: { __type: "String" },
    clearPassengers: { __type: "Boolean" },
    color: { __type: "String" },
    removePassengerIDs: { __type: "[ID!]" },
    updateTime: { __type: "Time" },
  },
  UpdatePassengerInput: {
    carID: { __type: "ID" },
    clearCar: { __type: "Boolean" },
    name: { __type: "String" },
    updateTime: { __type: "Time" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createCar: { __type: "Car", __args: { input: "CreateCarInput!" } },
    createPassenger: {
      __type: "Passenger",
      __args: { input: "CreatePassengerInput!" },
    },
    updateCar: {
      __type: "Car",
      __args: { id: "Int!", input: "UpdateCarInput!" },
    },
    updatePassenger: {
      __type: "Passenger",
      __args: { id: "Int!", input: "UpdatePassengerInput!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    cars: {
      __type: "[Car]!",
      __args: { orderBy: "CarOrder", where: "CarWhereInput" },
    },
    passengers: {
      __type: "[Passenger]!",
      __args: { orderBy: "PassengerOrder", where: "PassengerWhereInput" },
    },
  },
  subscription: {},
} as const;

export interface Car {
  __typename?: "Car";
  brand: ScalarsEnums["String"];
  color: ScalarsEnums["String"];
  createTime: ScalarsEnums["Time"];
  id: ScalarsEnums["ID"];
  passengers?: Maybe<Array<Passenger>>;
  updateTime: ScalarsEnums["Time"];
}

export interface Passenger {
  __typename?: "Passenger";
  car?: Maybe<Car>;
  createTime: ScalarsEnums["Time"];
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  updateTime: ScalarsEnums["Time"];
}

export interface Mutation {
  __typename?: "Mutation";
  createCar: (args: { input: CreateCarInput }) => Maybe<Car>;
  createPassenger: (args: { input: CreatePassengerInput }) => Maybe<Passenger>;
  updateCar: (args: {
    id: Scalars["Int"];
    input: UpdateCarInput;
  }) => Maybe<Car>;
  updatePassenger: (args: {
    id: Scalars["Int"];
    input: UpdatePassengerInput;
  }) => Maybe<Passenger>;
}

export interface Query {
  __typename?: "Query";
  cars: (args?: {
    orderBy?: Maybe<CarOrder>;
    where?: Maybe<CarWhereInput>;
  }) => Array<Maybe<Car>>;
  passengers: (args?: {
    orderBy?: Maybe<PassengerOrder>;
    where?: Maybe<PassengerWhereInput>;
  }) => Array<Maybe<Passenger>>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  CarOrderField: CarOrderField | undefined;
  OrderDirection: OrderDirection | undefined;
  PassengerOrderField: PassengerOrderField | undefined;
}