export type Maybe<T> = T | null | undefined
export type InputMaybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type FieldWrapper<T> = T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export enum Category {
  Creatures = 'Creatures',
  Equipment = 'Equipment',
  Materials = 'Materials',
  Monsters = 'Monsters',
  Treasure = 'Treasure'
}

export type Creature = {
  readonly __typename?: 'Creature'
  readonly category: FieldWrapper<Category>
  readonly commonLocations: ReadonlyArray<
    FieldWrapper<Scalars['String']['output']>
  >
  readonly cookingEffect: Maybe<FieldWrapper<Scalars['String']['output']>>
  readonly description: FieldWrapper<Scalars['String']['output']>
  readonly drops: ReadonlyArray<FieldWrapper<Scalars['String']['output']>>
  readonly heartsRecovered: Maybe<FieldWrapper<Scalars['Float']['output']>>
  readonly id: FieldWrapper<Scalars['Int']['output']>
  readonly image: FieldWrapper<Scalars['String']['output']>
  readonly isDlc: FieldWrapper<Scalars['Boolean']['output']>
  readonly isEdible: FieldWrapper<Scalars['Boolean']['output']>
  readonly name: FieldWrapper<Scalars['String']['output']>
}

export type CreatureFilters = {
  readonly isEdible?: InputMaybe<Scalars['Boolean']['input']>
}

export type Equipment = {
  readonly __typename?: 'Equipment'
  readonly category: FieldWrapper<Category>
  readonly commonLocations: ReadonlyArray<
    FieldWrapper<Scalars['String']['output']>
  >
  readonly description: FieldWrapper<Scalars['String']['output']>
  readonly id: FieldWrapper<Scalars['Int']['output']>
  readonly image: FieldWrapper<Scalars['String']['output']>
  readonly isDlc: FieldWrapper<Scalars['Boolean']['output']>
  readonly name: FieldWrapper<Scalars['String']['output']>
  readonly properties: FieldWrapper<EquipmentProperty>
}

export type EquipmentProperty = {
  readonly __typename?: 'EquipmentProperty'
  readonly attackDamage: Maybe<FieldWrapper<Scalars['Int']['output']>>
  readonly defense: Maybe<FieldWrapper<Scalars['Int']['output']>>
  readonly effect: Maybe<FieldWrapper<Scalars['String']['output']>>
  readonly type: Maybe<FieldWrapper<Scalars['String']['output']>>
}

export type Material = {
  readonly __typename?: 'Material'
  readonly category: FieldWrapper<Category>
  readonly commonLocations: ReadonlyArray<
    FieldWrapper<Scalars['String']['output']>
  >
  readonly cookingEffect: Maybe<FieldWrapper<Scalars['String']['output']>>
  readonly description: FieldWrapper<Scalars['String']['output']>
  readonly fuseAttackPower: Maybe<FieldWrapper<Scalars['Int']['output']>>
  readonly heartsRecovered: FieldWrapper<Scalars['Float']['output']>
  readonly id: FieldWrapper<Scalars['Int']['output']>
  readonly image: FieldWrapper<Scalars['String']['output']>
  readonly isDlc: FieldWrapper<Scalars['Boolean']['output']>
  readonly name: FieldWrapper<Scalars['String']['output']>
}

export type Monster = {
  readonly __typename?: 'Monster'
  readonly category: FieldWrapper<Category>
  readonly commonLocations: ReadonlyArray<
    FieldWrapper<Scalars['String']['output']>
  >
  readonly description: FieldWrapper<Scalars['String']['output']>
  readonly drops: ReadonlyArray<FieldWrapper<Scalars['String']['output']>>
  readonly id: FieldWrapper<Scalars['Int']['output']>
  readonly image: FieldWrapper<Scalars['String']['output']>
  readonly isDlc: FieldWrapper<Scalars['Boolean']['output']>
  readonly name: FieldWrapper<Scalars['String']['output']>
}

export type Query = {
  readonly __typename?: 'Query'
  readonly creatures: ReadonlyArray<FieldWrapper<Creature>>
  readonly equipment: ReadonlyArray<FieldWrapper<Equipment>>
  readonly materials: ReadonlyArray<FieldWrapper<Material>>
  readonly monsters: ReadonlyArray<FieldWrapper<Monster>>
  readonly treasure: ReadonlyArray<FieldWrapper<Treasure>>
}

export type QueryCreaturesArgs = {
  filters: InputMaybe<CreatureFilters>
}

export type Treasure = {
  readonly __typename?: 'Treasure'
  readonly category: FieldWrapper<Category>
  readonly commonLocations: ReadonlyArray<
    FieldWrapper<Scalars['String']['output']>
  >
  readonly description: FieldWrapper<Scalars['String']['output']>
  readonly drops: ReadonlyArray<FieldWrapper<Scalars['String']['output']>>
  readonly id: FieldWrapper<Scalars['Int']['output']>
  readonly image: FieldWrapper<Scalars['String']['output']>
  readonly isDlc: FieldWrapper<Scalars['Boolean']['output']>
  readonly name: FieldWrapper<Scalars['String']['output']>
}

export type MonsterFragment = {
  readonly __typename?: 'Monster'
  readonly id: number
  readonly name: string
  readonly description: string
  readonly category: Category
  readonly commonLocations: ReadonlyArray<string>
  readonly drops: ReadonlyArray<string>
  readonly image: string
  readonly isDlc: boolean
}

export type MonstersQueryVariables = Exact<{ [key: string]: never }>

export type MonstersQuery = {
  readonly __typename?: 'Query'
  readonly monsters: ReadonlyArray<
    { readonly __typename?: 'Monster' } & MonsterFragment
  >
}
