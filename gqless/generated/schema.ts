// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  InputNode,
  InputNodeField,
  ArrayNode,
  ObjectNode,
  FieldNode,
  Arguments,
  ArgumentsField,
  EnumNode,
  ScalarNode,
  InterfaceNode
} from "gqless";

export const schema = {
  get AUTH_PROVIDER_EMAIL() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, false);
        },
        get password() {
          return new InputNodeField(schema.String, false);
        }
      },
      { name: "AUTH_PROVIDER_EMAIL" }
    );
  },
  get AuthProviderSignupData() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.AUTH_PROVIDER_EMAIL, true);
        }
      },
      { name: "AuthProviderSignupData" }
    );
  },
  get CreateFile() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false);
        }
      },
      { name: "CreateFile" }
    );
  },
  get CreatePost() {
    return new InputNode(
      {
        get title() {
          return new InputNodeField(schema.String, false);
        },
        get url() {
          return new InputNodeField(schema.String, false);
        },
        get votes() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "CreatePost" }
    );
  },
  get CreateUser() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.String, false);
        },
        get lastName() {
          return new InputNodeField(schema.String, false);
        }
      },
      { name: "CreateUser" }
    );
  },
  get FilePreviousValues() {
    return new ObjectNode(
      {
        get contentType() {
          return new FieldNode(schema.String, undefined, false);
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get secret() {
          return new FieldNode(schema.String, undefined, false);
        },
        get size() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get url() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "FilePreviousValues",
        extension: ((extensions as any) || {}).FilePreviousValues
      }
    );
  },
  get FileSubscriptionFilter() {
    return new InputNode(
      {
        get AND() {
          return new InputNodeField(
            new ArrayNode(schema.FileSubscriptionFilter, true),
            true
          );
        },
        get OR() {
          return new InputNodeField(
            new ArrayNode(schema.FileSubscriptionFilter, true),
            true
          );
        },
        get mutation_in() {
          return new InputNodeField(
            new ArrayNode(schema._ModelMutationType, true),
            true
          );
        },
        get updatedFields_contains() {
          return new InputNodeField(schema.String, true);
        },
        get updatedFields_contains_every() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get updatedFields_contains_some() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get node() {
          return new InputNodeField(schema.FileSubscriptionFilterNode, true);
        }
      },
      { name: "FileSubscriptionFilter" }
    );
  },
  get FileSubscriptionFilterNode() {
    return new InputNode(
      {
        get contentType() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get contentType_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get contentType_lt() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_lte() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_gt() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_gte() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_contains() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not() {
          return new InputNodeField(schema.ID, true);
        },
        get id_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_not_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_lt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_lte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get name_not() {
          return new InputNodeField(schema.String, true);
        },
        get name_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get name_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get name_lt() {
          return new InputNodeField(schema.String, true);
        },
        get name_lte() {
          return new InputNodeField(schema.String, true);
        },
        get name_gt() {
          return new InputNodeField(schema.String, true);
        },
        get name_gte() {
          return new InputNodeField(schema.String, true);
        },
        get name_contains() {
          return new InputNodeField(schema.String, true);
        },
        get name_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get name_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get name_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get name_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get name_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not() {
          return new InputNodeField(schema.String, true);
        },
        get secret_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get secret_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get secret_lt() {
          return new InputNodeField(schema.String, true);
        },
        get secret_lte() {
          return new InputNodeField(schema.String, true);
        },
        get secret_gt() {
          return new InputNodeField(schema.String, true);
        },
        get secret_gte() {
          return new InputNodeField(schema.String, true);
        },
        get secret_contains() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get secret_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get size() {
          return new InputNodeField(schema.Int, true);
        },
        get size_not() {
          return new InputNodeField(schema.Int, true);
        },
        get size_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get size_not_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get size_lt() {
          return new InputNodeField(schema.Int, true);
        },
        get size_lte() {
          return new InputNodeField(schema.Int, true);
        },
        get size_gt() {
          return new InputNodeField(schema.Int, true);
        },
        get size_gte() {
          return new InputNodeField(schema.Int, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get url() {
          return new InputNodeField(schema.String, true);
        },
        get url_not() {
          return new InputNodeField(schema.String, true);
        },
        get url_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_lt() {
          return new InputNodeField(schema.String, true);
        },
        get url_lte() {
          return new InputNodeField(schema.String, true);
        },
        get url_gt() {
          return new InputNodeField(schema.String, true);
        },
        get url_gte() {
          return new InputNodeField(schema.String, true);
        },
        get url_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_ends_with() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "FileSubscriptionFilterNode" }
    );
  },
  get FileSubscriptionPayload() {
    return new ObjectNode(
      {
        get mutation() {
          return new FieldNode(schema._ModelMutationType, undefined, false);
        },
        get node() {
          return new FieldNode(schema.File, undefined, true);
        },
        get updatedFields() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get previousValues() {
          return new FieldNode(schema.FilePreviousValues, undefined, true);
        }
      },
      {
        name: "FileSubscriptionPayload",
        extension: ((extensions as any) || {}).FileSubscriptionPayload
      }
    );
  },
  get InvokeFunctionInput() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false);
        },
        get input() {
          return new InputNodeField(schema.String, false);
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "InvokeFunctionInput" }
    );
  },
  get InvokeFunctionPayload() {
    return new ObjectNode(
      {
        get result() {
          return new FieldNode(schema.String, undefined, false);
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "InvokeFunctionPayload",
        extension: ((extensions as any) || {}).InvokeFunctionPayload
      }
    );
  },
  get Mutation() {
    return new ObjectNode(
      {
        get createFile() {
          return new FieldNode(
            schema.File,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            true
          );
        },
        get createPost() {
          return new FieldNode(
            schema.Post,
            new Arguments({
              get title() {
                return new ArgumentsField(schema.String, false);
              },
              get url() {
                return new ArgumentsField(schema.String, false);
              },
              get votes() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get updateFile() {
          return new FieldNode(
            schema.File,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, false);
              },
              get name() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get updatePost() {
          return new FieldNode(
            schema.Post,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, false);
              },
              get title() {
                return new ArgumentsField(schema.String, true);
              },
              get url() {
                return new ArgumentsField(schema.String, true);
              },
              get votes() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get updateUser() {
          return new FieldNode(
            schema.User,
            new Arguments({
              get firstName() {
                return new ArgumentsField(schema.String, true);
              },
              get id() {
                return new ArgumentsField(schema.ID, false);
              },
              get lastName() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get updateOrCreateFile() {
          return new FieldNode(
            schema.File,
            new Arguments(
              {
                get update() {
                  return new ArgumentsField(schema.UpdateFile, false);
                },
                get create() {
                  return new ArgumentsField(schema.CreateFile, false);
                }
              },
              true
            ),
            true
          );
        },
        get updateOrCreatePost() {
          return new FieldNode(
            schema.Post,
            new Arguments(
              {
                get update() {
                  return new ArgumentsField(schema.UpdatePost, false);
                },
                get create() {
                  return new ArgumentsField(schema.CreatePost, false);
                }
              },
              true
            ),
            true
          );
        },
        get updateOrCreateUser() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get update() {
                  return new ArgumentsField(schema.UpdateUser, false);
                },
                get create() {
                  return new ArgumentsField(schema.CreateUser, false);
                }
              },
              true
            ),
            true
          );
        },
        get deleteFile() {
          return new FieldNode(
            schema.File,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get deletePost() {
          return new FieldNode(
            schema.Post,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get deleteUser() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get signinUser() {
          return new FieldNode(
            schema.SigninPayload,
            new Arguments({
              get email() {
                return new ArgumentsField(schema.AUTH_PROVIDER_EMAIL, true);
              }
            }),
            false
          );
        },
        get createUser() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get firstName() {
                  return new ArgumentsField(schema.String, false);
                },
                get lastName() {
                  return new ArgumentsField(schema.String, false);
                },
                get authProvider() {
                  return new ArgumentsField(
                    schema.AuthProviderSignupData,
                    false
                  );
                }
              },
              true
            ),
            true
          );
        },
        get invokeFunction() {
          return new FieldNode(
            schema.InvokeFunctionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.InvokeFunctionInput, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      { name: "Mutation", extension: ((extensions as any) || {}).Mutation }
    );
  },
  get PostPreviousValues() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get title() {
          return new FieldNode(schema.String, undefined, false);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get url() {
          return new FieldNode(schema.String, undefined, false);
        },
        get votes() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "PostPreviousValues",
        extension: ((extensions as any) || {}).PostPreviousValues
      }
    );
  },
  get PostSubscriptionFilter() {
    return new InputNode(
      {
        get AND() {
          return new InputNodeField(
            new ArrayNode(schema.PostSubscriptionFilter, true),
            true
          );
        },
        get OR() {
          return new InputNodeField(
            new ArrayNode(schema.PostSubscriptionFilter, true),
            true
          );
        },
        get mutation_in() {
          return new InputNodeField(
            new ArrayNode(schema._ModelMutationType, true),
            true
          );
        },
        get updatedFields_contains() {
          return new InputNodeField(schema.String, true);
        },
        get updatedFields_contains_every() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get updatedFields_contains_some() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get node() {
          return new InputNodeField(schema.PostSubscriptionFilterNode, true);
        }
      },
      { name: "PostSubscriptionFilter" }
    );
  },
  get PostSubscriptionFilterNode() {
    return new InputNode(
      {
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not() {
          return new InputNodeField(schema.ID, true);
        },
        get id_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_not_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_lt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_lte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get title() {
          return new InputNodeField(schema.String, true);
        },
        get title_not() {
          return new InputNodeField(schema.String, true);
        },
        get title_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get title_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get title_lt() {
          return new InputNodeField(schema.String, true);
        },
        get title_lte() {
          return new InputNodeField(schema.String, true);
        },
        get title_gt() {
          return new InputNodeField(schema.String, true);
        },
        get title_gte() {
          return new InputNodeField(schema.String, true);
        },
        get title_contains() {
          return new InputNodeField(schema.String, true);
        },
        get title_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get title_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get title_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get title_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get title_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get url() {
          return new InputNodeField(schema.String, true);
        },
        get url_not() {
          return new InputNodeField(schema.String, true);
        },
        get url_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_lt() {
          return new InputNodeField(schema.String, true);
        },
        get url_lte() {
          return new InputNodeField(schema.String, true);
        },
        get url_gt() {
          return new InputNodeField(schema.String, true);
        },
        get url_gte() {
          return new InputNodeField(schema.String, true);
        },
        get url_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get votes() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_not() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get votes_not_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get votes_lt() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_lte() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_gt() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_gte() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "PostSubscriptionFilterNode" }
    );
  },
  get PostSubscriptionPayload() {
    return new ObjectNode(
      {
        get mutation() {
          return new FieldNode(schema._ModelMutationType, undefined, false);
        },
        get node() {
          return new FieldNode(schema.Post, undefined, true);
        },
        get updatedFields() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get previousValues() {
          return new FieldNode(schema.PostPreviousValues, undefined, true);
        }
      },
      {
        name: "PostSubscriptionPayload",
        extension: ((extensions as any) || {}).PostSubscriptionPayload
      }
    );
  },
  get SigninPayload() {
    return new ObjectNode(
      {
        get token() {
          return new FieldNode(schema.String, undefined, true);
        },
        get user() {
          return new FieldNode(schema.User, undefined, true);
        }
      },
      {
        name: "SigninPayload",
        extension: ((extensions as any) || {}).SigninPayload
      }
    );
  },
  get Subscription() {
    return new ObjectNode(
      {
        get File() {
          return new FieldNode(
            schema.FileSubscriptionPayload,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.FileSubscriptionFilter, true);
              }
            }),
            true
          );
        },
        get Post() {
          return new FieldNode(
            schema.PostSubscriptionPayload,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.PostSubscriptionFilter, true);
              }
            }),
            true
          );
        },
        get User() {
          return new FieldNode(
            schema.UserSubscriptionPayload,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.UserSubscriptionFilter, true);
              }
            }),
            true
          );
        }
      },
      {
        name: "Subscription",
        extension: ((extensions as any) || {}).Subscription
      }
    );
  },
  get UpdateFile() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "UpdateFile" }
    );
  },
  get UpdatePost() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false);
        },
        get title() {
          return new InputNodeField(schema.String, true);
        },
        get url() {
          return new InputNodeField(schema.String, true);
        },
        get votes() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "UpdatePost" }
    );
  },
  get UpdateUser() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.ID, false);
        },
        get lastName() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "UpdateUser" }
    );
  },
  get UserPreviousValues() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get firstName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get lastName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get password() {
          return new FieldNode(schema.String, undefined, true);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        }
      },
      {
        name: "UserPreviousValues",
        extension: ((extensions as any) || {}).UserPreviousValues
      }
    );
  },
  get UserSubscriptionFilter() {
    return new InputNode(
      {
        get AND() {
          return new InputNodeField(
            new ArrayNode(schema.UserSubscriptionFilter, true),
            true
          );
        },
        get OR() {
          return new InputNodeField(
            new ArrayNode(schema.UserSubscriptionFilter, true),
            true
          );
        },
        get mutation_in() {
          return new InputNodeField(
            new ArrayNode(schema._ModelMutationType, true),
            true
          );
        },
        get updatedFields_contains() {
          return new InputNodeField(schema.String, true);
        },
        get updatedFields_contains_every() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get updatedFields_contains_some() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get node() {
          return new InputNodeField(schema.UserSubscriptionFilterNode, true);
        }
      },
      { name: "UserSubscriptionFilter" }
    );
  },
  get UserSubscriptionFilterNode() {
    return new InputNode(
      {
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get email_not() {
          return new InputNodeField(schema.String, true);
        },
        get email_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get email_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get email_lt() {
          return new InputNodeField(schema.String, true);
        },
        get email_lte() {
          return new InputNodeField(schema.String, true);
        },
        get email_gt() {
          return new InputNodeField(schema.String, true);
        },
        get email_gte() {
          return new InputNodeField(schema.String, true);
        },
        get email_contains() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get email_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get firstName_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get firstName_lt() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_lte() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_gt() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_gte() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_contains() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not() {
          return new InputNodeField(schema.ID, true);
        },
        get id_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_not_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_lt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_lte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get lastName() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get lastName_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get lastName_lt() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_lte() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_gt() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_gte() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_contains() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get password() {
          return new InputNodeField(schema.String, true);
        },
        get password_not() {
          return new InputNodeField(schema.String, true);
        },
        get password_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get password_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get password_lt() {
          return new InputNodeField(schema.String, true);
        },
        get password_lte() {
          return new InputNodeField(schema.String, true);
        },
        get password_gt() {
          return new InputNodeField(schema.String, true);
        },
        get password_gte() {
          return new InputNodeField(schema.String, true);
        },
        get password_contains() {
          return new InputNodeField(schema.String, true);
        },
        get password_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get password_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get password_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get password_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get password_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        }
      },
      { name: "UserSubscriptionFilterNode" }
    );
  },
  get UserSubscriptionPayload() {
    return new ObjectNode(
      {
        get mutation() {
          return new FieldNode(schema._ModelMutationType, undefined, false);
        },
        get node() {
          return new FieldNode(schema.User, undefined, true);
        },
        get updatedFields() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get previousValues() {
          return new FieldNode(schema.UserPreviousValues, undefined, true);
        }
      },
      {
        name: "UserSubscriptionPayload",
        extension: ((extensions as any) || {}).UserSubscriptionPayload
      }
    );
  },
  get _ModelMutationType() {
    return new EnumNode({ name: "_ModelMutationType" });
  },
  get DateTime() {
    return new ScalarNode({
      name: "DateTime",
      extension: ((extensions as any) || {}).DateTime
    });
  },
  get File() {
    return new ObjectNode(
      {
        get contentType() {
          return new FieldNode(schema.String, undefined, false);
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get secret() {
          return new FieldNode(schema.String, undefined, false);
        },
        get size() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get url() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      { name: "File", extension: ((extensions as any) || {}).File }
    );
  },
  get FileFilter() {
    return new InputNode(
      {
        get AND() {
          return new InputNodeField(
            new ArrayNode(schema.FileFilter, true),
            true
          );
        },
        get OR() {
          return new InputNodeField(
            new ArrayNode(schema.FileFilter, true),
            true
          );
        },
        get contentType() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get contentType_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get contentType_lt() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_lte() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_gt() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_gte() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_contains() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get contentType_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not() {
          return new InputNodeField(schema.ID, true);
        },
        get id_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_not_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_lt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_lte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get name_not() {
          return new InputNodeField(schema.String, true);
        },
        get name_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get name_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get name_lt() {
          return new InputNodeField(schema.String, true);
        },
        get name_lte() {
          return new InputNodeField(schema.String, true);
        },
        get name_gt() {
          return new InputNodeField(schema.String, true);
        },
        get name_gte() {
          return new InputNodeField(schema.String, true);
        },
        get name_contains() {
          return new InputNodeField(schema.String, true);
        },
        get name_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get name_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get name_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get name_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get name_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not() {
          return new InputNodeField(schema.String, true);
        },
        get secret_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get secret_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get secret_lt() {
          return new InputNodeField(schema.String, true);
        },
        get secret_lte() {
          return new InputNodeField(schema.String, true);
        },
        get secret_gt() {
          return new InputNodeField(schema.String, true);
        },
        get secret_gte() {
          return new InputNodeField(schema.String, true);
        },
        get secret_contains() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get secret_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get secret_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get size() {
          return new InputNodeField(schema.Int, true);
        },
        get size_not() {
          return new InputNodeField(schema.Int, true);
        },
        get size_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get size_not_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get size_lt() {
          return new InputNodeField(schema.Int, true);
        },
        get size_lte() {
          return new InputNodeField(schema.Int, true);
        },
        get size_gt() {
          return new InputNodeField(schema.Int, true);
        },
        get size_gte() {
          return new InputNodeField(schema.Int, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get url() {
          return new InputNodeField(schema.String, true);
        },
        get url_not() {
          return new InputNodeField(schema.String, true);
        },
        get url_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_lt() {
          return new InputNodeField(schema.String, true);
        },
        get url_lte() {
          return new InputNodeField(schema.String, true);
        },
        get url_gt() {
          return new InputNodeField(schema.String, true);
        },
        get url_gte() {
          return new InputNodeField(schema.String, true);
        },
        get url_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_ends_with() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "FileFilter" }
    );
  },
  get FileOrderBy() {
    return new EnumNode({ name: "FileOrderBy" });
  },
  get Node() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        }
      },
      [schema.File, schema.Post, schema.User],
      { name: "Node", extension: ((extensions as any) || {}).Node }
    );
  },
  get Post() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get title() {
          return new FieldNode(schema.String, undefined, false);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get url() {
          return new FieldNode(schema.String, undefined, false);
        },
        get votes() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Post", extension: ((extensions as any) || {}).Post }
    );
  },
  get PostFilter() {
    return new InputNode(
      {
        get AND() {
          return new InputNodeField(
            new ArrayNode(schema.PostFilter, true),
            true
          );
        },
        get OR() {
          return new InputNodeField(
            new ArrayNode(schema.PostFilter, true),
            true
          );
        },
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not() {
          return new InputNodeField(schema.ID, true);
        },
        get id_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_not_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_lt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_lte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get title() {
          return new InputNodeField(schema.String, true);
        },
        get title_not() {
          return new InputNodeField(schema.String, true);
        },
        get title_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get title_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get title_lt() {
          return new InputNodeField(schema.String, true);
        },
        get title_lte() {
          return new InputNodeField(schema.String, true);
        },
        get title_gt() {
          return new InputNodeField(schema.String, true);
        },
        get title_gte() {
          return new InputNodeField(schema.String, true);
        },
        get title_contains() {
          return new InputNodeField(schema.String, true);
        },
        get title_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get title_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get title_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get title_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get title_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get url() {
          return new InputNodeField(schema.String, true);
        },
        get url_not() {
          return new InputNodeField(schema.String, true);
        },
        get url_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get url_lt() {
          return new InputNodeField(schema.String, true);
        },
        get url_lte() {
          return new InputNodeField(schema.String, true);
        },
        get url_gt() {
          return new InputNodeField(schema.String, true);
        },
        get url_gte() {
          return new InputNodeField(schema.String, true);
        },
        get url_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get url_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get url_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get votes() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_not() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get votes_not_in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get votes_lt() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_lte() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_gt() {
          return new InputNodeField(schema.Int, true);
        },
        get votes_gte() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "PostFilter" }
    );
  },
  get PostOrderBy() {
    return new EnumNode({ name: "PostOrderBy" });
  },
  get Query() {
    return new ObjectNode(
      {
        get allFiles() {
          return new FieldNode(
            new ArrayNode(schema.File, false),
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.FileFilter, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.FileOrderBy, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get after() {
                return new ArgumentsField(schema.String, true);
              },
              get before() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get last() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            false
          );
        },
        get allPosts() {
          return new FieldNode(
            new ArrayNode(schema.Post, false),
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.PostFilter, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.PostOrderBy, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get after() {
                return new ArgumentsField(schema.String, true);
              },
              get before() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get last() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            false
          );
        },
        get allUsers() {
          return new FieldNode(
            new ArrayNode(schema.User, false),
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.UserFilter, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.UserOrderBy, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get after() {
                return new ArgumentsField(schema.String, true);
              },
              get before() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get last() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            false
          );
        },
        get _allFilesMeta() {
          return new FieldNode(
            schema._QueryMeta,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.FileFilter, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.FileOrderBy, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get after() {
                return new ArgumentsField(schema.String, true);
              },
              get before() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get last() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            false
          );
        },
        get _allPostsMeta() {
          return new FieldNode(
            schema._QueryMeta,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.PostFilter, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.PostOrderBy, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get after() {
                return new ArgumentsField(schema.String, true);
              },
              get before() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get last() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            false
          );
        },
        get _allUsersMeta() {
          return new FieldNode(
            schema._QueryMeta,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.UserFilter, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.UserOrderBy, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              },
              get after() {
                return new ArgumentsField(schema.String, true);
              },
              get before() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get last() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            false
          );
        },
        get File() {
          return new FieldNode(
            schema.File,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true);
              },
              get secret() {
                return new ArgumentsField(schema.String, true);
              },
              get url() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get Post() {
          return new FieldNode(
            schema.Post,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, true);
              }
            }),
            true
          );
        },
        get User() {
          return new FieldNode(
            schema.User,
            new Arguments({
              get email() {
                return new ArgumentsField(schema.String, true);
              },
              get id() {
                return new ArgumentsField(schema.ID, true);
              }
            }),
            true
          );
        },
        get user() {
          return new FieldNode(schema.User, undefined, true);
        },
        get node() {
          return new FieldNode(
            schema.Node,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get User() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get firstName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get lastName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get password() {
          return new FieldNode(schema.String, undefined, true);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        }
      },
      { name: "User", extension: ((extensions as any) || {}).User }
    );
  },
  get UserFilter() {
    return new InputNode(
      {
        get AND() {
          return new InputNodeField(
            new ArrayNode(schema.UserFilter, true),
            true
          );
        },
        get OR() {
          return new InputNodeField(
            new ArrayNode(schema.UserFilter, true),
            true
          );
        },
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get email_not() {
          return new InputNodeField(schema.String, true);
        },
        get email_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get email_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get email_lt() {
          return new InputNodeField(schema.String, true);
        },
        get email_lte() {
          return new InputNodeField(schema.String, true);
        },
        get email_gt() {
          return new InputNodeField(schema.String, true);
        },
        get email_gte() {
          return new InputNodeField(schema.String, true);
        },
        get email_contains() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get email_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get firstName_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get firstName_lt() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_lte() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_gt() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_gte() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_contains() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get firstName_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not() {
          return new InputNodeField(schema.ID, true);
        },
        get id_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_not_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_lt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_lte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gt() {
          return new InputNodeField(schema.ID, true);
        },
        get id_gte() {
          return new InputNodeField(schema.ID, true);
        },
        get id_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_contains() {
          return new InputNodeField(schema.ID, true);
        },
        get id_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_starts_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not_ends_with() {
          return new InputNodeField(schema.ID, true);
        },
        get lastName() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get lastName_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get lastName_lt() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_lte() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_gt() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_gte() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_contains() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get lastName_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get password() {
          return new InputNodeField(schema.String, true);
        },
        get password_not() {
          return new InputNodeField(schema.String, true);
        },
        get password_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get password_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get password_lt() {
          return new InputNodeField(schema.String, true);
        },
        get password_lte() {
          return new InputNodeField(schema.String, true);
        },
        get password_gt() {
          return new InputNodeField(schema.String, true);
        },
        get password_gte() {
          return new InputNodeField(schema.String, true);
        },
        get password_contains() {
          return new InputNodeField(schema.String, true);
        },
        get password_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get password_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get password_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get password_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get password_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get updatedAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        }
      },
      { name: "UserFilter" }
    );
  },
  get UserOrderBy() {
    return new EnumNode({ name: "UserOrderBy" });
  },
  get _QueryMeta() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(schema.Int, undefined, false);
        }
      },
      { name: "_QueryMeta", extension: ((extensions as any) || {})._QueryMeta }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get onOperation() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get onFragment() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get onField() {
          return new FieldNode(schema.Boolean, undefined, false);
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  }
};

lazyGetters(schema);
