export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any;
  Uuid: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  PaginationAmount: any;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  kitNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  model?: Maybe<VehicleModel>;
  modelId: Scalars['Uuid'];
  plannedBuildAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  scanLockedAt?: Maybe<Scalars['DateTime']>;
  vehicleComponents?: Maybe<Array<Maybe<VehicleComponent>>>;
  vin?: Maybe<Scalars['String']>;
};

export type VehicleModel = {
  __typename?: 'VehicleModel';
  activeComponentMappings?: Maybe<Array<Maybe<VehicleModelComponent>>>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  modelComponents?: Maybe<Array<Maybe<VehicleModelComponent>>>;
  name?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};


export type VehicleModelModelComponentsArgs = {
  where?: Maybe<VehicleModelComponentFilter>;
};

export type VehicleComponent = {
  __typename?: 'VehicleComponent';
  component?: Maybe<Component>;
  componentId: Scalars['Uuid'];
  componentScans?: Maybe<Array<Maybe<ComponentScan>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  productionStation?: Maybe<ProductionStation>;
  productionStationId: Scalars['Uuid'];
  removedAt?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt?: Maybe<Scalars['DateTime']>;
  vehicle?: Maybe<Vehicle>;
  vehicleId: Scalars['Uuid'];
};


export type VehicleComponentComponentScansArgs = {
  where?: Maybe<ComponentScanFilter>;
};


export type VehicleModelComponentFilter = {
  AND?: Maybe<Array<VehicleModelComponentFilter>>;
  componentId?: Maybe<Scalars['Uuid']>;
  componentId_gt?: Maybe<Scalars['Uuid']>;
  componentId_gte?: Maybe<Scalars['Uuid']>;
  componentId_in?: Maybe<Array<Scalars['Uuid']>>;
  componentId_lt?: Maybe<Scalars['Uuid']>;
  componentId_lte?: Maybe<Scalars['Uuid']>;
  componentId_not?: Maybe<Scalars['Uuid']>;
  componentId_not_gt?: Maybe<Scalars['Uuid']>;
  componentId_not_gte?: Maybe<Scalars['Uuid']>;
  componentId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  componentId_not_lt?: Maybe<Scalars['Uuid']>;
  componentId_not_lte?: Maybe<Scalars['Uuid']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_gt?: Maybe<Scalars['DateTime']>;
  createdAt_not_gte?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_lt?: Maybe<Scalars['DateTime']>;
  createdAt_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  OR?: Maybe<Array<VehicleModelComponentFilter>>;
  productionStationId?: Maybe<Scalars['Uuid']>;
  productionStationId_gt?: Maybe<Scalars['Uuid']>;
  productionStationId_gte?: Maybe<Scalars['Uuid']>;
  productionStationId_in?: Maybe<Array<Scalars['Uuid']>>;
  productionStationId_lt?: Maybe<Scalars['Uuid']>;
  productionStationId_lte?: Maybe<Scalars['Uuid']>;
  productionStationId_not?: Maybe<Scalars['Uuid']>;
  productionStationId_not_gt?: Maybe<Scalars['Uuid']>;
  productionStationId_not_gte?: Maybe<Scalars['Uuid']>;
  productionStationId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  productionStationId_not_lt?: Maybe<Scalars['Uuid']>;
  productionStationId_not_lte?: Maybe<Scalars['Uuid']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  removedAt_gt?: Maybe<Scalars['DateTime']>;
  removedAt_gte?: Maybe<Scalars['DateTime']>;
  removedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_lt?: Maybe<Scalars['DateTime']>;
  removedAt_lte?: Maybe<Scalars['DateTime']>;
  removedAt_not?: Maybe<Scalars['DateTime']>;
  removedAt_not_gt?: Maybe<Scalars['DateTime']>;
  removedAt_not_gte?: Maybe<Scalars['DateTime']>;
  removedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_not_lt?: Maybe<Scalars['DateTime']>;
  removedAt_not_lte?: Maybe<Scalars['DateTime']>;
  vehicleModelId?: Maybe<Scalars['Uuid']>;
  vehicleModelId_gt?: Maybe<Scalars['Uuid']>;
  vehicleModelId_gte?: Maybe<Scalars['Uuid']>;
  vehicleModelId_in?: Maybe<Array<Scalars['Uuid']>>;
  vehicleModelId_lt?: Maybe<Scalars['Uuid']>;
  vehicleModelId_lte?: Maybe<Scalars['Uuid']>;
  vehicleModelId_not?: Maybe<Scalars['Uuid']>;
  vehicleModelId_not_gt?: Maybe<Scalars['Uuid']>;
  vehicleModelId_not_gte?: Maybe<Scalars['Uuid']>;
  vehicleModelId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  vehicleModelId_not_lt?: Maybe<Scalars['Uuid']>;
  vehicleModelId_not_lte?: Maybe<Scalars['Uuid']>;
};

export type ComponentScanFilter = {
  AND?: Maybe<Array<ComponentScanFilter>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_gt?: Maybe<Scalars['DateTime']>;
  createdAt_not_gte?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_lt?: Maybe<Scalars['DateTime']>;
  createdAt_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  OR?: Maybe<Array<ComponentScanFilter>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  removedAt_gt?: Maybe<Scalars['DateTime']>;
  removedAt_gte?: Maybe<Scalars['DateTime']>;
  removedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_lt?: Maybe<Scalars['DateTime']>;
  removedAt_lte?: Maybe<Scalars['DateTime']>;
  removedAt_not?: Maybe<Scalars['DateTime']>;
  removedAt_not_gt?: Maybe<Scalars['DateTime']>;
  removedAt_not_gte?: Maybe<Scalars['DateTime']>;
  removedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_not_lt?: Maybe<Scalars['DateTime']>;
  removedAt_not_lte?: Maybe<Scalars['DateTime']>;
  scan1?: Maybe<Scalars['String']>;
  scan1_contains?: Maybe<Scalars['String']>;
  scan1_ends_with?: Maybe<Scalars['String']>;
  scan1_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  scan1_not?: Maybe<Scalars['String']>;
  scan1_not_contains?: Maybe<Scalars['String']>;
  scan1_not_ends_with?: Maybe<Scalars['String']>;
  scan1_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  scan1_not_starts_with?: Maybe<Scalars['String']>;
  scan1_starts_with?: Maybe<Scalars['String']>;
  scan2?: Maybe<Scalars['String']>;
  scan2_contains?: Maybe<Scalars['String']>;
  scan2_ends_with?: Maybe<Scalars['String']>;
  scan2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  scan2_not?: Maybe<Scalars['String']>;
  scan2_not_contains?: Maybe<Scalars['String']>;
  scan2_not_ends_with?: Maybe<Scalars['String']>;
  scan2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  scan2_not_starts_with?: Maybe<Scalars['String']>;
  scan2_starts_with?: Maybe<Scalars['String']>;
  vehicleComponentId?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_gt?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_gte?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_in?: Maybe<Array<Scalars['Uuid']>>;
  vehicleComponentId_lt?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_lte?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_not?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_not_gt?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_not_gte?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  vehicleComponentId_not_lt?: Maybe<Scalars['Uuid']>;
  vehicleComponentId_not_lte?: Maybe<Scalars['Uuid']>;
};

export type Query = {
  __typename?: 'Query';
  components?: Maybe<ComponentConnection>;
  info: Scalars['String'];
  productionStations?: Maybe<ProductionStationConnection>;
  vehicleByVIN: Vehicle;
  vehicleComponents?: Maybe<VehicleComponentConnection>;
  vehicleComponentScans?: Maybe<ComponentScanConnection>;
  vehicleModels?: Maybe<VehicleModelConnection>;
  vehicles?: Maybe<VehicleConnection>;
};


export type QueryComponentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  order_by?: Maybe<ComponentSort>;
  where?: Maybe<ComponentFilter>;
};


export type QueryProductionStationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  order_by?: Maybe<ProductionStationSort>;
  where?: Maybe<ProductionStationFilter>;
};


export type QueryVehicleByVinArgs = {
  vin: Scalars['String'];
};


export type QueryVehicleComponentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  order_by?: Maybe<VehicleComponentSort>;
  where?: Maybe<VehicleComponentFilter>;
};


export type QueryVehicleComponentScansArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  order_by?: Maybe<ComponentScanSort>;
  where?: Maybe<ComponentScanFilter>;
};


export type QueryVehicleModelsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  order_by?: Maybe<VehicleModelSort>;
  where?: Maybe<VehicleModelFilter>;
};


export type QueryVehiclesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  order_by?: Maybe<VehicleSort>;
  where?: Maybe<VehicleFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createVehicle: MutationPayloadOfVehicle;
  saveComponent: MutationPayloadOfComponent;
  saveProductionStation: MutationPayloadOfProductionStation;
};


export type MutationCreateVehicleArgs = {
  input: VehicleInput;
};


export type MutationSaveComponentArgs = {
  input: ComponentInput;
};


export type MutationSaveProductionStationArgs = {
  input: ProductionStationInput;
};



export type VehicleModelComponent = {
  __typename?: 'VehicleModelComponent';
  component?: Maybe<Component>;
  componentId: Scalars['Uuid'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  productionStation?: Maybe<ProductionStation>;
  productionStationId: Scalars['Uuid'];
  removedAt?: Maybe<Scalars['DateTime']>;
  vehicleModel?: Maybe<VehicleModel>;
  vehicleModelId: Scalars['Uuid'];
};

export type ComponentScan = {
  __typename?: 'ComponentScan';
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  removedAt?: Maybe<Scalars['DateTime']>;
  scan1?: Maybe<Scalars['String']>;
  scan2?: Maybe<Scalars['String']>;
  vehicleComponent?: Maybe<VehicleComponent>;
  vehicleComponentId: Scalars['Uuid'];
};

export type Component = {
  __typename?: 'Component';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  name?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  vehicleComponents?: Maybe<Array<Maybe<VehicleComponent>>>;
  vehicleModelComponents?: Maybe<Array<Maybe<VehicleModelComponent>>>;
};

export type ProductionStation = {
  __typename?: 'ProductionStation';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  modelComponents?: Maybe<Array<Maybe<VehicleModelComponent>>>;
  name?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  sortOrder: Scalars['Int'];
  vehicleComponents?: Maybe<Array<Maybe<VehicleComponent>>>;
};

export type ComponentFilter = {
  AND?: Maybe<Array<ComponentFilter>>;
  code?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_ends_with?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  code_not?: Maybe<Scalars['String']>;
  code_not_contains?: Maybe<Scalars['String']>;
  code_not_ends_with?: Maybe<Scalars['String']>;
  code_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  code_not_starts_with?: Maybe<Scalars['String']>;
  code_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_gt?: Maybe<Scalars['DateTime']>;
  createdAt_not_gte?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_lt?: Maybe<Scalars['DateTime']>;
  createdAt_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<ComponentFilter>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  removedAt_gt?: Maybe<Scalars['DateTime']>;
  removedAt_gte?: Maybe<Scalars['DateTime']>;
  removedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_lt?: Maybe<Scalars['DateTime']>;
  removedAt_lte?: Maybe<Scalars['DateTime']>;
  removedAt_not?: Maybe<Scalars['DateTime']>;
  removedAt_not_gt?: Maybe<Scalars['DateTime']>;
  removedAt_not_gte?: Maybe<Scalars['DateTime']>;
  removedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_not_lt?: Maybe<Scalars['DateTime']>;
  removedAt_not_lte?: Maybe<Scalars['DateTime']>;
};

export type ComponentSort = {
  code?: Maybe<SortOperationKind>;
  createdAt?: Maybe<SortOperationKind>;
  id?: Maybe<SortOperationKind>;
  name?: Maybe<SortOperationKind>;
  removedAt?: Maybe<SortOperationKind>;
};

export type VehicleFilter = {
  AND?: Maybe<Array<VehicleFilter>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_gt?: Maybe<Scalars['DateTime']>;
  createdAt_not_gte?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_lt?: Maybe<Scalars['DateTime']>;
  createdAt_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  kitNo?: Maybe<Scalars['String']>;
  kitNo_contains?: Maybe<Scalars['String']>;
  kitNo_ends_with?: Maybe<Scalars['String']>;
  kitNo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  kitNo_not?: Maybe<Scalars['String']>;
  kitNo_not_contains?: Maybe<Scalars['String']>;
  kitNo_not_ends_with?: Maybe<Scalars['String']>;
  kitNo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  kitNo_not_starts_with?: Maybe<Scalars['String']>;
  kitNo_starts_with?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  lotNo_contains?: Maybe<Scalars['String']>;
  lotNo_ends_with?: Maybe<Scalars['String']>;
  lotNo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lotNo_not?: Maybe<Scalars['String']>;
  lotNo_not_contains?: Maybe<Scalars['String']>;
  lotNo_not_ends_with?: Maybe<Scalars['String']>;
  lotNo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lotNo_not_starts_with?: Maybe<Scalars['String']>;
  lotNo_starts_with?: Maybe<Scalars['String']>;
  modelId?: Maybe<Scalars['Uuid']>;
  modelId_gt?: Maybe<Scalars['Uuid']>;
  modelId_gte?: Maybe<Scalars['Uuid']>;
  modelId_in?: Maybe<Array<Scalars['Uuid']>>;
  modelId_lt?: Maybe<Scalars['Uuid']>;
  modelId_lte?: Maybe<Scalars['Uuid']>;
  modelId_not?: Maybe<Scalars['Uuid']>;
  modelId_not_gt?: Maybe<Scalars['Uuid']>;
  modelId_not_gte?: Maybe<Scalars['Uuid']>;
  modelId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  modelId_not_lt?: Maybe<Scalars['Uuid']>;
  modelId_not_lte?: Maybe<Scalars['Uuid']>;
  OR?: Maybe<Array<VehicleFilter>>;
  plannedBuildAt?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_gt?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_gte?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  plannedBuildAt_lt?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_lte?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_not?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_not_gt?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_not_gte?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  plannedBuildAt_not_lt?: Maybe<Scalars['DateTime']>;
  plannedBuildAt_not_lte?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  removedAt_gt?: Maybe<Scalars['DateTime']>;
  removedAt_gte?: Maybe<Scalars['DateTime']>;
  removedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_lt?: Maybe<Scalars['DateTime']>;
  removedAt_lte?: Maybe<Scalars['DateTime']>;
  removedAt_not?: Maybe<Scalars['DateTime']>;
  removedAt_not_gt?: Maybe<Scalars['DateTime']>;
  removedAt_not_gte?: Maybe<Scalars['DateTime']>;
  removedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_not_lt?: Maybe<Scalars['DateTime']>;
  removedAt_not_lte?: Maybe<Scalars['DateTime']>;
  scanLockedAt?: Maybe<Scalars['DateTime']>;
  scanLockedAt_gt?: Maybe<Scalars['DateTime']>;
  scanLockedAt_gte?: Maybe<Scalars['DateTime']>;
  scanLockedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  scanLockedAt_lt?: Maybe<Scalars['DateTime']>;
  scanLockedAt_lte?: Maybe<Scalars['DateTime']>;
  scanLockedAt_not?: Maybe<Scalars['DateTime']>;
  scanLockedAt_not_gt?: Maybe<Scalars['DateTime']>;
  scanLockedAt_not_gte?: Maybe<Scalars['DateTime']>;
  scanLockedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  scanLockedAt_not_lt?: Maybe<Scalars['DateTime']>;
  scanLockedAt_not_lte?: Maybe<Scalars['DateTime']>;
  vIN?: Maybe<Scalars['String']>;
  vIN_contains?: Maybe<Scalars['String']>;
  vIN_ends_with?: Maybe<Scalars['String']>;
  vIN_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  vIN_not?: Maybe<Scalars['String']>;
  vIN_not_contains?: Maybe<Scalars['String']>;
  vIN_not_ends_with?: Maybe<Scalars['String']>;
  vIN_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  vIN_not_starts_with?: Maybe<Scalars['String']>;
  vIN_starts_with?: Maybe<Scalars['String']>;
};

export type VehicleSort = {
  createdAt?: Maybe<SortOperationKind>;
  id?: Maybe<SortOperationKind>;
  kitNo?: Maybe<SortOperationKind>;
  lotNo?: Maybe<SortOperationKind>;
  modelId?: Maybe<SortOperationKind>;
  plannedBuildAt?: Maybe<SortOperationKind>;
  removedAt?: Maybe<SortOperationKind>;
  scanLockedAt?: Maybe<SortOperationKind>;
  vIN?: Maybe<SortOperationKind>;
};

export type VehicleModelFilter = {
  AND?: Maybe<Array<VehicleModelFilter>>;
  code?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_ends_with?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  code_not?: Maybe<Scalars['String']>;
  code_not_contains?: Maybe<Scalars['String']>;
  code_not_ends_with?: Maybe<Scalars['String']>;
  code_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  code_not_starts_with?: Maybe<Scalars['String']>;
  code_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_gt?: Maybe<Scalars['DateTime']>;
  createdAt_not_gte?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_lt?: Maybe<Scalars['DateTime']>;
  createdAt_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<VehicleModelFilter>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  removedAt_gt?: Maybe<Scalars['DateTime']>;
  removedAt_gte?: Maybe<Scalars['DateTime']>;
  removedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_lt?: Maybe<Scalars['DateTime']>;
  removedAt_lte?: Maybe<Scalars['DateTime']>;
  removedAt_not?: Maybe<Scalars['DateTime']>;
  removedAt_not_gt?: Maybe<Scalars['DateTime']>;
  removedAt_not_gte?: Maybe<Scalars['DateTime']>;
  removedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_not_lt?: Maybe<Scalars['DateTime']>;
  removedAt_not_lte?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
};

export type VehicleModelSort = {
  code?: Maybe<SortOperationKind>;
  createdAt?: Maybe<SortOperationKind>;
  id?: Maybe<SortOperationKind>;
  name?: Maybe<SortOperationKind>;
  removedAt?: Maybe<SortOperationKind>;
  type?: Maybe<SortOperationKind>;
};

export type VehicleComponentFilter = {
  AND?: Maybe<Array<VehicleComponentFilter>>;
  componentId?: Maybe<Scalars['Uuid']>;
  componentId_gt?: Maybe<Scalars['Uuid']>;
  componentId_gte?: Maybe<Scalars['Uuid']>;
  componentId_in?: Maybe<Array<Scalars['Uuid']>>;
  componentId_lt?: Maybe<Scalars['Uuid']>;
  componentId_lte?: Maybe<Scalars['Uuid']>;
  componentId_not?: Maybe<Scalars['Uuid']>;
  componentId_not_gt?: Maybe<Scalars['Uuid']>;
  componentId_not_gte?: Maybe<Scalars['Uuid']>;
  componentId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  componentId_not_lt?: Maybe<Scalars['Uuid']>;
  componentId_not_lte?: Maybe<Scalars['Uuid']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_gt?: Maybe<Scalars['DateTime']>;
  createdAt_not_gte?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_lt?: Maybe<Scalars['DateTime']>;
  createdAt_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  OR?: Maybe<Array<VehicleComponentFilter>>;
  productionStationId?: Maybe<Scalars['Uuid']>;
  productionStationId_gt?: Maybe<Scalars['Uuid']>;
  productionStationId_gte?: Maybe<Scalars['Uuid']>;
  productionStationId_in?: Maybe<Array<Scalars['Uuid']>>;
  productionStationId_lt?: Maybe<Scalars['Uuid']>;
  productionStationId_lte?: Maybe<Scalars['Uuid']>;
  productionStationId_not?: Maybe<Scalars['Uuid']>;
  productionStationId_not_gt?: Maybe<Scalars['Uuid']>;
  productionStationId_not_gte?: Maybe<Scalars['Uuid']>;
  productionStationId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  productionStationId_not_lt?: Maybe<Scalars['Uuid']>;
  productionStationId_not_lte?: Maybe<Scalars['Uuid']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  removedAt_gt?: Maybe<Scalars['DateTime']>;
  removedAt_gte?: Maybe<Scalars['DateTime']>;
  removedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_lt?: Maybe<Scalars['DateTime']>;
  removedAt_lte?: Maybe<Scalars['DateTime']>;
  removedAt_not?: Maybe<Scalars['DateTime']>;
  removedAt_not_gt?: Maybe<Scalars['DateTime']>;
  removedAt_not_gte?: Maybe<Scalars['DateTime']>;
  removedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_not_lt?: Maybe<Scalars['DateTime']>;
  removedAt_not_lte?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_gt?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_gte?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  scanVerifiedAt_lt?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_lte?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_not?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_not_gt?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_not_gte?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  scanVerifiedAt_not_lt?: Maybe<Scalars['DateTime']>;
  scanVerifiedAt_not_lte?: Maybe<Scalars['DateTime']>;
  vehicleId?: Maybe<Scalars['Uuid']>;
  vehicleId_gt?: Maybe<Scalars['Uuid']>;
  vehicleId_gte?: Maybe<Scalars['Uuid']>;
  vehicleId_in?: Maybe<Array<Scalars['Uuid']>>;
  vehicleId_lt?: Maybe<Scalars['Uuid']>;
  vehicleId_lte?: Maybe<Scalars['Uuid']>;
  vehicleId_not?: Maybe<Scalars['Uuid']>;
  vehicleId_not_gt?: Maybe<Scalars['Uuid']>;
  vehicleId_not_gte?: Maybe<Scalars['Uuid']>;
  vehicleId_not_in?: Maybe<Array<Scalars['Uuid']>>;
  vehicleId_not_lt?: Maybe<Scalars['Uuid']>;
  vehicleId_not_lte?: Maybe<Scalars['Uuid']>;
};

export type VehicleComponentSort = {
  componentId?: Maybe<SortOperationKind>;
  createdAt?: Maybe<SortOperationKind>;
  id?: Maybe<SortOperationKind>;
  productionStationId?: Maybe<SortOperationKind>;
  removedAt?: Maybe<SortOperationKind>;
  scanVerifiedAt?: Maybe<SortOperationKind>;
  vehicleId?: Maybe<SortOperationKind>;
};

export type ComponentScanSort = {
  createdAt?: Maybe<SortOperationKind>;
  id?: Maybe<SortOperationKind>;
  removedAt?: Maybe<SortOperationKind>;
  scan1?: Maybe<SortOperationKind>;
  scan2?: Maybe<SortOperationKind>;
  vehicleComponentId?: Maybe<SortOperationKind>;
};

export type ProductionStationFilter = {
  AND?: Maybe<Array<ProductionStationFilter>>;
  code?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_ends_with?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  code_not?: Maybe<Scalars['String']>;
  code_not_contains?: Maybe<Scalars['String']>;
  code_not_ends_with?: Maybe<Scalars['String']>;
  code_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  code_not_starts_with?: Maybe<Scalars['String']>;
  code_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_gt?: Maybe<Scalars['DateTime']>;
  createdAt_not_gte?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_lt?: Maybe<Scalars['DateTime']>;
  createdAt_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<ProductionStationFilter>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  removedAt_gt?: Maybe<Scalars['DateTime']>;
  removedAt_gte?: Maybe<Scalars['DateTime']>;
  removedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_lt?: Maybe<Scalars['DateTime']>;
  removedAt_lte?: Maybe<Scalars['DateTime']>;
  removedAt_not?: Maybe<Scalars['DateTime']>;
  removedAt_not_gt?: Maybe<Scalars['DateTime']>;
  removedAt_not_gte?: Maybe<Scalars['DateTime']>;
  removedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  removedAt_not_lt?: Maybe<Scalars['DateTime']>;
  removedAt_not_lte?: Maybe<Scalars['DateTime']>;
  sortOrder?: Maybe<Scalars['Int']>;
  sortOrder_gt?: Maybe<Scalars['Int']>;
  sortOrder_gte?: Maybe<Scalars['Int']>;
  sortOrder_in?: Maybe<Array<Scalars['Int']>>;
  sortOrder_lt?: Maybe<Scalars['Int']>;
  sortOrder_lte?: Maybe<Scalars['Int']>;
  sortOrder_not?: Maybe<Scalars['Int']>;
  sortOrder_not_gt?: Maybe<Scalars['Int']>;
  sortOrder_not_gte?: Maybe<Scalars['Int']>;
  sortOrder_not_in?: Maybe<Array<Scalars['Int']>>;
  sortOrder_not_lt?: Maybe<Scalars['Int']>;
  sortOrder_not_lte?: Maybe<Scalars['Int']>;
};

export type ProductionStationSort = {
  code?: Maybe<SortOperationKind>;
  createdAt?: Maybe<SortOperationKind>;
  id?: Maybe<SortOperationKind>;
  name?: Maybe<SortOperationKind>;
  removedAt?: Maybe<SortOperationKind>;
  sortOrder?: Maybe<SortOperationKind>;
};


/** A connection to a list of items. */
export type ComponentConnection = {
  __typename?: 'ComponentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ComponentEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Component>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type ProductionStationConnection = {
  __typename?: 'ProductionStationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductionStationEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ProductionStation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type VehicleConnection = {
  __typename?: 'VehicleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VehicleEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Vehicle>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type VehicleModelConnection = {
  __typename?: 'VehicleModelConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VehicleModelEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<VehicleModel>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type VehicleComponentConnection = {
  __typename?: 'VehicleComponentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VehicleComponentEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<VehicleComponent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A connection to a list of items. */
export type ComponentScanConnection = {
  __typename?: 'ComponentScanConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ComponentScanEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<ComponentScan>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SortOperationKind {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type ComponentEdge = {
  __typename?: 'ComponentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Component>;
};

/** An edge in a connection. */
export type ComponentScanEdge = {
  __typename?: 'ComponentScanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ComponentScan>;
};

/** An edge in a connection. */
export type ProductionStationEdge = {
  __typename?: 'ProductionStationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ProductionStation>;
};

/** An edge in a connection. */
export type VehicleEdge = {
  __typename?: 'VehicleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Vehicle>;
};

/** An edge in a connection. */
export type VehicleModelEdge = {
  __typename?: 'VehicleModelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<VehicleModel>;
};

/** An edge in a connection. */
export type VehicleComponentEdge = {
  __typename?: 'VehicleComponentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<VehicleComponent>;
};

export type MutationPayloadOfVehicle = {
  __typename?: 'MutationPayloadOfVehicle';
  entity?: Maybe<Vehicle>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type VehicleInput = {
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  modelId: Scalars['String'];
  vin: Scalars['String'];
};

export type ComponentInput = {
  code: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductionStationInput = {
  code: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MutationPayloadOfComponent = {
  __typename?: 'MutationPayloadOfComponent';
  entity?: Maybe<Component>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type MutationPayloadOfProductionStation = {
  __typename?: 'MutationPayloadOfProductionStation';
  entity?: Maybe<ProductionStation>;
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GetComponentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetComponentsQuery = (
  { __typename?: 'Query' }
  & { components?: Maybe<(
    { __typename?: 'ComponentConnection' }
    & Pick<ComponentConnection, 'totalCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Component' }
      & Pick<Component, 'id' | 'code' | 'name' | 'createdAt'>
    )>>> }
  )> }
);

export type GetVehicleInProductionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVehicleInProductionQuery = (
  { __typename?: 'Query' }
  & { vehicles?: Maybe<(
    { __typename?: 'VehicleConnection' }
    & Pick<VehicleConnection, 'totalCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Vehicle' }
      & Pick<Vehicle, 'vin' | 'plannedBuildAt' | 'scanLockedAt'>
      & { model?: Maybe<(
        { __typename?: 'VehicleModel' }
        & Pick<VehicleModel, 'code' | 'name'>
      )> }
    )>>> }
  )> }
);
