import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  EnumType,
  ScalarType
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name AUTH_PROVIDER_EMAIL
 * @type INPUT_OBJECT
 */
export type AUTH_PROVIDER_EMAIL = { email: string; password: string };

/**
 * @name AuthProviderSignupData
 * @type INPUT_OBJECT
 */
export type AuthProviderSignupData = { email?: AUTH_PROVIDER_EMAIL | null };

/**
 * @name CreateFile
 * @type INPUT_OBJECT
 */
export type CreateFile = { name: string };

/**
 * @name CreatePost
 * @type INPUT_OBJECT
 */
export type CreatePost = { title: string; url: string; votes?: number | null };

/**
 * @name CreateUser
 * @type INPUT_OBJECT
 */
export type CreateUser = { firstName: string; lastName: string };

/**
 * @name FilePreviousValues
 * @type OBJECT
 */
type t_FilePreviousValues = FieldsType<
  {
    __typename: t_String<"FilePreviousValues">;
    contentType: t_String;
    createdAt?: t_DateTime | null;
    id: t_ID;
    name: t_String;
    secret: t_String;
    size: t_Int;
    updatedAt?: t_DateTime | null;
    url: t_String;
  },
  Extension<"FilePreviousValues">
>;

/**
 * @name FileSubscriptionFilter
 * @type INPUT_OBJECT
 */
export type FileSubscriptionFilter = {
  AND?: FileSubscriptionFilter[] | null;
  OR?: FileSubscriptionFilter[] | null;
  mutation_in?: _ModelMutationType[] | null;
  updatedFields_contains?: string | null;
  updatedFields_contains_every?: string[] | null;
  updatedFields_contains_some?: string[] | null;
  node?: FileSubscriptionFilterNode | null;
};

/**
 * @name FileSubscriptionFilterNode
 * @type INPUT_OBJECT
 */
export type FileSubscriptionFilterNode = {
  contentType?: string | null;
  contentType_not?: string | null;
  contentType_in?: string[] | null;
  contentType_not_in?: string[] | null;
  contentType_lt?: string | null;
  contentType_lte?: string | null;
  contentType_gt?: string | null;
  contentType_gte?: string | null;
  contentType_contains?: string | null;
  contentType_not_contains?: string | null;
  contentType_starts_with?: string | null;
  contentType_not_starts_with?: string | null;
  contentType_ends_with?: string | null;
  contentType_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  secret?: string | null;
  secret_not?: string | null;
  secret_in?: string[] | null;
  secret_not_in?: string[] | null;
  secret_lt?: string | null;
  secret_lte?: string | null;
  secret_gt?: string | null;
  secret_gte?: string | null;
  secret_contains?: string | null;
  secret_not_contains?: string | null;
  secret_starts_with?: string | null;
  secret_not_starts_with?: string | null;
  secret_ends_with?: string | null;
  secret_not_ends_with?: string | null;
  size?: number | null;
  size_not?: number | null;
  size_in?: number[] | null;
  size_not_in?: number[] | null;
  size_lt?: number | null;
  size_lte?: number | null;
  size_gt?: number | null;
  size_gte?: number | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  url?: string | null;
  url_not?: string | null;
  url_in?: string[] | null;
  url_not_in?: string[] | null;
  url_lt?: string | null;
  url_lte?: string | null;
  url_gt?: string | null;
  url_gte?: string | null;
  url_contains?: string | null;
  url_not_contains?: string | null;
  url_starts_with?: string | null;
  url_not_starts_with?: string | null;
  url_ends_with?: string | null;
  url_not_ends_with?: string | null;
};

/**
 * @name FileSubscriptionPayload
 * @type OBJECT
 */
type t_FileSubscriptionPayload = FieldsType<
  {
    __typename: t_String<"FileSubscriptionPayload">;
    mutation: t__ModelMutationType;
    node?: t_File | null;
    updatedFields?: t_String[] | null;
    previousValues?: t_FilePreviousValues | null;
  },
  Extension<"FileSubscriptionPayload">
>;

/**
 * @name InvokeFunctionInput
 * @type INPUT_OBJECT
 */
export type InvokeFunctionInput = {
  name: string;
  input: string;
  clientMutationId?: string | null;
};

/**
 * @name InvokeFunctionPayload
 * @type OBJECT
 */
type t_InvokeFunctionPayload = FieldsType<
  {
    __typename: t_String<"InvokeFunctionPayload">;
    result: t_String;
    clientMutationId?: t_String | null;
  },
  Extension<"InvokeFunctionPayload">
>;

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<"Mutation">;
    createFile?: FieldsTypeArg<{ name: string }, t_File | null>;
    createPost?: FieldsTypeArg<
      { title: string; url: string; votes?: number | null },
      t_Post | null
    >;
    updateFile?: FieldsTypeArg<
      { id: string; name?: string | null },
      t_File | null
    >;
    updatePost?: FieldsTypeArg<
      {
        id: string;
        title?: string | null;
        url?: string | null;
        votes?: number | null;
      },
      t_Post | null
    >;
    updateUser?: FieldsTypeArg<
      { firstName?: string | null; id: string; lastName?: string | null },
      t_User | null
    >;
    updateOrCreateFile?: FieldsTypeArg<
      { update: UpdateFile; create: CreateFile },
      t_File | null
    >;
    updateOrCreatePost?: FieldsTypeArg<
      { update: UpdatePost; create: CreatePost },
      t_Post | null
    >;
    updateOrCreateUser?: FieldsTypeArg<
      { update: UpdateUser; create: CreateUser },
      t_User | null
    >;
    deleteFile?: FieldsTypeArg<{ id: string }, t_File | null>;
    deletePost?: FieldsTypeArg<{ id: string }, t_Post | null>;
    deleteUser?: FieldsTypeArg<{ id: string }, t_User | null>;
    signinUser: FieldsTypeArg<
      { email?: AUTH_PROVIDER_EMAIL | null },
      t_SigninPayload
    >;
    createUser?: FieldsTypeArg<
      {
        firstName: string;
        lastName: string;
        authProvider: AuthProviderSignupData;
      },
      t_User | null
    >;
    invokeFunction?: FieldsTypeArg<
      { input: InvokeFunctionInput },
      t_InvokeFunctionPayload | null
    >;
  },
  Extension<"Mutation">
>;

/**
 * @name PostPreviousValues
 * @type OBJECT
 */
type t_PostPreviousValues = FieldsType<
  {
    __typename: t_String<"PostPreviousValues">;
    createdAt?: t_DateTime | null;
    id: t_ID;
    title: t_String;
    updatedAt?: t_DateTime | null;
    url: t_String;
    votes?: t_Int | null;
  },
  Extension<"PostPreviousValues">
>;

/**
 * @name PostSubscriptionFilter
 * @type INPUT_OBJECT
 */
export type PostSubscriptionFilter = {
  AND?: PostSubscriptionFilter[] | null;
  OR?: PostSubscriptionFilter[] | null;
  mutation_in?: _ModelMutationType[] | null;
  updatedFields_contains?: string | null;
  updatedFields_contains_every?: string[] | null;
  updatedFields_contains_some?: string[] | null;
  node?: PostSubscriptionFilterNode | null;
};

/**
 * @name PostSubscriptionFilterNode
 * @type INPUT_OBJECT
 */
export type PostSubscriptionFilterNode = {
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  url?: string | null;
  url_not?: string | null;
  url_in?: string[] | null;
  url_not_in?: string[] | null;
  url_lt?: string | null;
  url_lte?: string | null;
  url_gt?: string | null;
  url_gte?: string | null;
  url_contains?: string | null;
  url_not_contains?: string | null;
  url_starts_with?: string | null;
  url_not_starts_with?: string | null;
  url_ends_with?: string | null;
  url_not_ends_with?: string | null;
  votes?: number | null;
  votes_not?: number | null;
  votes_in?: number[] | null;
  votes_not_in?: number[] | null;
  votes_lt?: number | null;
  votes_lte?: number | null;
  votes_gt?: number | null;
  votes_gte?: number | null;
};

/**
 * @name PostSubscriptionPayload
 * @type OBJECT
 */
type t_PostSubscriptionPayload = FieldsType<
  {
    __typename: t_String<"PostSubscriptionPayload">;
    mutation: t__ModelMutationType;
    node?: t_Post | null;
    updatedFields?: t_String[] | null;
    previousValues?: t_PostPreviousValues | null;
  },
  Extension<"PostSubscriptionPayload">
>;

/**
 * @name SigninPayload
 * @type OBJECT
 */
type t_SigninPayload = FieldsType<
  {
    __typename: t_String<"SigninPayload">;
    token?: t_String | null;
    user?: t_User | null;
  },
  Extension<"SigninPayload">
>;

/**
 * @name Subscription
 * @type OBJECT
 */
type t_Subscription = FieldsType<
  {
    __typename: t_String<"Subscription">;
    File?: FieldsTypeArg<
      { filter?: FileSubscriptionFilter | null },
      t_FileSubscriptionPayload | null
    >;
    Post?: FieldsTypeArg<
      { filter?: PostSubscriptionFilter | null },
      t_PostSubscriptionPayload | null
    >;
    User?: FieldsTypeArg<
      { filter?: UserSubscriptionFilter | null },
      t_UserSubscriptionPayload | null
    >;
  },
  Extension<"Subscription">
>;

/**
 * @name UpdateFile
 * @type INPUT_OBJECT
 */
export type UpdateFile = { id: string; name?: string | null };

/**
 * @name UpdatePost
 * @type INPUT_OBJECT
 */
export type UpdatePost = {
  id: string;
  title?: string | null;
  url?: string | null;
  votes?: number | null;
};

/**
 * @name UpdateUser
 * @type INPUT_OBJECT
 */
export type UpdateUser = {
  firstName?: string | null;
  id: string;
  lastName?: string | null;
};

/**
 * @name UserPreviousValues
 * @type OBJECT
 */
type t_UserPreviousValues = FieldsType<
  {
    __typename: t_String<"UserPreviousValues">;
    createdAt?: t_DateTime | null;
    email?: t_String | null;
    firstName: t_String;
    id: t_ID;
    lastName: t_String;
    password?: t_String | null;
    updatedAt?: t_DateTime | null;
  },
  Extension<"UserPreviousValues">
>;

/**
 * @name UserSubscriptionFilter
 * @type INPUT_OBJECT
 */
export type UserSubscriptionFilter = {
  AND?: UserSubscriptionFilter[] | null;
  OR?: UserSubscriptionFilter[] | null;
  mutation_in?: _ModelMutationType[] | null;
  updatedFields_contains?: string | null;
  updatedFields_contains_every?: string[] | null;
  updatedFields_contains_some?: string[] | null;
  node?: UserSubscriptionFilterNode | null;
};

/**
 * @name UserSubscriptionFilterNode
 * @type INPUT_OBJECT
 */
export type UserSubscriptionFilterNode = {
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  email?: string | null;
  email_not?: string | null;
  email_in?: string[] | null;
  email_not_in?: string[] | null;
  email_lt?: string | null;
  email_lte?: string | null;
  email_gt?: string | null;
  email_gte?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  firstName?: string | null;
  firstName_not?: string | null;
  firstName_in?: string[] | null;
  firstName_not_in?: string[] | null;
  firstName_lt?: string | null;
  firstName_lte?: string | null;
  firstName_gt?: string | null;
  firstName_gte?: string | null;
  firstName_contains?: string | null;
  firstName_not_contains?: string | null;
  firstName_starts_with?: string | null;
  firstName_not_starts_with?: string | null;
  firstName_ends_with?: string | null;
  firstName_not_ends_with?: string | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  lastName?: string | null;
  lastName_not?: string | null;
  lastName_in?: string[] | null;
  lastName_not_in?: string[] | null;
  lastName_lt?: string | null;
  lastName_lte?: string | null;
  lastName_gt?: string | null;
  lastName_gte?: string | null;
  lastName_contains?: string | null;
  lastName_not_contains?: string | null;
  lastName_starts_with?: string | null;
  lastName_not_starts_with?: string | null;
  lastName_ends_with?: string | null;
  lastName_not_ends_with?: string | null;
  password?: string | null;
  password_not?: string | null;
  password_in?: string[] | null;
  password_not_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_contains?: string | null;
  password_not_contains?: string | null;
  password_starts_with?: string | null;
  password_not_starts_with?: string | null;
  password_ends_with?: string | null;
  password_not_ends_with?: string | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
};

/**
 * @name UserSubscriptionPayload
 * @type OBJECT
 */
type t_UserSubscriptionPayload = FieldsType<
  {
    __typename: t_String<"UserSubscriptionPayload">;
    mutation: t__ModelMutationType;
    node?: t_User | null;
    updatedFields?: t_String[] | null;
    previousValues?: t_UserPreviousValues | null;
  },
  Extension<"UserSubscriptionPayload">
>;

/**
 * @name _ModelMutationType
 * @type ENUM
 */
type t__ModelMutationType = EnumType<"CREATED" | "UPDATED" | "DELETED">;

/**
 * @name DateTime
 * @type SCALAR
 */
type t_DateTime<T extends any = any> = ScalarType<T, Extension<"DateTime">>;

/**
 * @name File
 * @type OBJECT
 * @implements Node
 */
type t_File = FieldsType<
  {
    __typename: t_String<"File">;
    contentType: t_String;
    createdAt?: t_DateTime | null;
    id: t_ID;
    name: t_String;
    secret: t_String;
    size: t_Int;
    updatedAt?: t_DateTime | null;
    url: t_String;
  },
  Extension<"File">
>;

/**
 * @name FileFilter
 * @type INPUT_OBJECT
 */
export type FileFilter = {
  AND?: FileFilter[] | null;
  OR?: FileFilter[] | null;
  contentType?: string | null;
  contentType_not?: string | null;
  contentType_in?: string[] | null;
  contentType_not_in?: string[] | null;
  contentType_lt?: string | null;
  contentType_lte?: string | null;
  contentType_gt?: string | null;
  contentType_gte?: string | null;
  contentType_contains?: string | null;
  contentType_not_contains?: string | null;
  contentType_starts_with?: string | null;
  contentType_not_starts_with?: string | null;
  contentType_ends_with?: string | null;
  contentType_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_lt?: string | null;
  name_lte?: string | null;
  name_gt?: string | null;
  name_gte?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  secret?: string | null;
  secret_not?: string | null;
  secret_in?: string[] | null;
  secret_not_in?: string[] | null;
  secret_lt?: string | null;
  secret_lte?: string | null;
  secret_gt?: string | null;
  secret_gte?: string | null;
  secret_contains?: string | null;
  secret_not_contains?: string | null;
  secret_starts_with?: string | null;
  secret_not_starts_with?: string | null;
  secret_ends_with?: string | null;
  secret_not_ends_with?: string | null;
  size?: number | null;
  size_not?: number | null;
  size_in?: number[] | null;
  size_not_in?: number[] | null;
  size_lt?: number | null;
  size_lte?: number | null;
  size_gt?: number | null;
  size_gte?: number | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  url?: string | null;
  url_not?: string | null;
  url_in?: string[] | null;
  url_not_in?: string[] | null;
  url_lt?: string | null;
  url_lte?: string | null;
  url_gt?: string | null;
  url_gte?: string | null;
  url_contains?: string | null;
  url_not_contains?: string | null;
  url_starts_with?: string | null;
  url_not_starts_with?: string | null;
  url_ends_with?: string | null;
  url_not_ends_with?: string | null;
};

/**
 * @name FileOrderBy
 * @type ENUM
 */
type t_FileOrderBy = EnumType<
  | "contentType_ASC"
  | "contentType_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "secret_ASC"
  | "secret_DESC"
  | "size_ASC"
  | "size_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "url_ASC"
  | "url_DESC"
>;

/**
 * @name Node
 * @type INTERFACE
 */
type t_Node = t_File | t_Post | t_User;

/**
 * @name Post
 * @type OBJECT
 * @implements Node
 */
type t_Post = FieldsType<
  {
    __typename: t_String<"Post">;
    createdAt?: t_DateTime | null;
    id: t_ID;
    title: t_String;
    updatedAt?: t_DateTime | null;
    url: t_String;
    votes?: t_Int | null;
  },
  Extension<"Post">
>;

/**
 * @name PostFilter
 * @type INPUT_OBJECT
 */
export type PostFilter = {
  AND?: PostFilter[] | null;
  OR?: PostFilter[] | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  url?: string | null;
  url_not?: string | null;
  url_in?: string[] | null;
  url_not_in?: string[] | null;
  url_lt?: string | null;
  url_lte?: string | null;
  url_gt?: string | null;
  url_gte?: string | null;
  url_contains?: string | null;
  url_not_contains?: string | null;
  url_starts_with?: string | null;
  url_not_starts_with?: string | null;
  url_ends_with?: string | null;
  url_not_ends_with?: string | null;
  votes?: number | null;
  votes_not?: number | null;
  votes_in?: number[] | null;
  votes_not_in?: number[] | null;
  votes_lt?: number | null;
  votes_lte?: number | null;
  votes_gt?: number | null;
  votes_gte?: number | null;
};

/**
 * @name PostOrderBy
 * @type ENUM
 */
type t_PostOrderBy = EnumType<
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "url_ASC"
  | "url_DESC"
  | "votes_ASC"
  | "votes_DESC"
>;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;
    allFiles: FieldsTypeArg<
      {
        filter?: FileFilter | null;
        orderBy?: FileOrderBy | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
      },
      t_File[]
    >;
    allPosts: FieldsTypeArg<
      {
        filter?: PostFilter | null;
        orderBy?: PostOrderBy | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
      },
      t_Post[]
    >;
    allUsers: FieldsTypeArg<
      {
        filter?: UserFilter | null;
        orderBy?: UserOrderBy | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
      },
      t_User[]
    >;
    _allFilesMeta: FieldsTypeArg<
      {
        filter?: FileFilter | null;
        orderBy?: FileOrderBy | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
      },
      t__QueryMeta
    >;
    _allPostsMeta: FieldsTypeArg<
      {
        filter?: PostFilter | null;
        orderBy?: PostOrderBy | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
      },
      t__QueryMeta
    >;
    _allUsersMeta: FieldsTypeArg<
      {
        filter?: UserFilter | null;
        orderBy?: UserOrderBy | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
      },
      t__QueryMeta
    >;
    File?: FieldsTypeArg<
      { id?: string | null; secret?: string | null; url?: string | null },
      t_File | null
    >;
    Post?: FieldsTypeArg<{ id?: string | null }, t_Post | null>;
    User?: FieldsTypeArg<
      { email?: string | null; id?: string | null },
      t_User | null
    >;
    user?: t_User | null;

    /**
     * Fetches an object given its ID
     */
    node?: FieldsTypeArg<{ id: string }, t_Node | null>;
  },
  Extension<"Query">
>;

/**
 * @name User
 * @type OBJECT
 * @implements Node
 */
type t_User = FieldsType<
  {
    __typename: t_String<"User">;
    createdAt?: t_DateTime | null;
    email?: t_String | null;
    firstName: t_String;
    id: t_ID;
    lastName: t_String;
    password?: t_String | null;
    updatedAt?: t_DateTime | null;
  },
  Extension<"User">
>;

/**
 * @name UserFilter
 * @type INPUT_OBJECT
 */
export type UserFilter = {
  AND?: UserFilter[] | null;
  OR?: UserFilter[] | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  email?: string | null;
  email_not?: string | null;
  email_in?: string[] | null;
  email_not_in?: string[] | null;
  email_lt?: string | null;
  email_lte?: string | null;
  email_gt?: string | null;
  email_gte?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  firstName?: string | null;
  firstName_not?: string | null;
  firstName_in?: string[] | null;
  firstName_not_in?: string[] | null;
  firstName_lt?: string | null;
  firstName_lte?: string | null;
  firstName_gt?: string | null;
  firstName_gte?: string | null;
  firstName_contains?: string | null;
  firstName_not_contains?: string | null;
  firstName_starts_with?: string | null;
  firstName_not_starts_with?: string | null;
  firstName_ends_with?: string | null;
  firstName_not_ends_with?: string | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  lastName?: string | null;
  lastName_not?: string | null;
  lastName_in?: string[] | null;
  lastName_not_in?: string[] | null;
  lastName_lt?: string | null;
  lastName_lte?: string | null;
  lastName_gt?: string | null;
  lastName_gte?: string | null;
  lastName_contains?: string | null;
  lastName_not_contains?: string | null;
  lastName_starts_with?: string | null;
  lastName_not_starts_with?: string | null;
  lastName_ends_with?: string | null;
  lastName_not_ends_with?: string | null;
  password?: string | null;
  password_not?: string | null;
  password_in?: string[] | null;
  password_not_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_contains?: string | null;
  password_not_contains?: string | null;
  password_starts_with?: string | null;
  password_not_starts_with?: string | null;
  password_ends_with?: string | null;
  password_not_ends_with?: string | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
};

/**
 * @name UserOrderBy
 * @type ENUM
 */
type t_UserOrderBy = EnumType<
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "email_ASC"
  | "email_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "id_ASC"
  | "id_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
>;

/**
 * @name _QueryMeta
 * @type OBJECT
 */
type t__QueryMeta = FieldsType<
  {
    __typename: t_String<"_QueryMeta">;
    count: t_Int;
  },
  Extension<"_QueryMeta">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];

    /**
     * @deprecated Use `locations`.
     */
    onOperation: t_Boolean;

    /**
     * @deprecated Use `locations`.
     */
    onFragment: t_Boolean;

    /**
     * @deprecated Use `locations`.
     */
    onField: t_Boolean;
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description?: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    name: t_String;
    description?: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: t_String | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    kind: t___TypeKind;
    name?: t_String | null;
    description?: t_String | null;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces?: t___Type[] | null;
    possibleTypes?: t___Type[] | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields?: t___InputValue[] | null;
    ofType?: t___Type | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name FilePreviousValues
 * @type OBJECT
 */
export type FilePreviousValues = TypeData<t_FilePreviousValues>;

/**
 * @name FileSubscriptionPayload
 * @type OBJECT
 */
export type FileSubscriptionPayload = TypeData<t_FileSubscriptionPayload>;

/**
 * @name InvokeFunctionPayload
 * @type OBJECT
 */
export type InvokeFunctionPayload = TypeData<t_InvokeFunctionPayload>;

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>;

/**
 * @name PostPreviousValues
 * @type OBJECT
 */
export type PostPreviousValues = TypeData<t_PostPreviousValues>;

/**
 * @name PostSubscriptionPayload
 * @type OBJECT
 */
export type PostSubscriptionPayload = TypeData<t_PostSubscriptionPayload>;

/**
 * @name SigninPayload
 * @type OBJECT
 */
export type SigninPayload = TypeData<t_SigninPayload>;

/**
 * @name Subscription
 * @type OBJECT
 */
export type Subscription = TypeData<t_Subscription>;

/**
 * @name UserPreviousValues
 * @type OBJECT
 */
export type UserPreviousValues = TypeData<t_UserPreviousValues>;

/**
 * @name UserSubscriptionPayload
 * @type OBJECT
 */
export type UserSubscriptionPayload = TypeData<t_UserSubscriptionPayload>;

/**
 * @name _ModelMutationType
 * @type ENUM
 */
export enum _ModelMutationType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED"
}

/**
 * @name DateTime
 * @type SCALAR
 */
export type DateTime = TypeData<t_DateTime>;

/**
 * @name File
 * @type OBJECT
 * @implements Node
 */
export type File = TypeData<t_File>;

/**
 * @name FileOrderBy
 * @type ENUM
 */
export enum FileOrderBy {
  contentType_ASC = "contentType_ASC",
  contentType_DESC = "contentType_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  secret_ASC = "secret_ASC",
  secret_DESC = "secret_DESC",
  size_ASC = "size_ASC",
  size_DESC = "size_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  url_ASC = "url_ASC",
  url_DESC = "url_DESC"
}

/**
 * @name Node
 * @type INTERFACE
 */
export type Node = TypeData<t_Node>;

/**
 * @name Post
 * @type OBJECT
 * @implements Node
 */
export type Post = TypeData<t_Post>;

/**
 * @name PostOrderBy
 * @type ENUM
 */
export enum PostOrderBy {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  url_ASC = "url_ASC",
  url_DESC = "url_DESC",
  votes_ASC = "votes_ASC",
  votes_DESC = "votes_DESC"
}

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name User
 * @type OBJECT
 * @implements Node
 */
export type User = TypeData<t_User>;

/**
 * @name UserOrderBy
 * @type ENUM
 */
export enum UserOrderBy {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  email_ASC = "email_ASC",
  email_DESC = "email_DESC",
  firstName_ASC = "firstName_ASC",
  firstName_DESC = "firstName_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  lastName_ASC = "lastName_ASC",
  lastName_DESC = "lastName_DESC",
  password_ASC = "password_ASC",
  password_DESC = "password_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC"
}

/**
 * @name _QueryMeta
 * @type OBJECT
 */
export type _QueryMeta = TypeData<t__QueryMeta>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  QUERY = "QUERY",
  MUTATION = "MUTATION",
  SUBSCRIPTION = "SUBSCRIPTION",
  FIELD = "FIELD",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  SCHEMA = "SCHEMA",
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  INPUT_OBJECT = "INPUT_OBJECT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
}

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  LIST = "LIST",
  NON_NULL = "NON_NULL"
}

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;
