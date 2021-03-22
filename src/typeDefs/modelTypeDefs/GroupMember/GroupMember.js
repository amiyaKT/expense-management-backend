import { gql } from 'apollo-server-express';

export const GroupMemberTypeDef = gql`
  extend type Query {

  }
  extend type Mutation {
    findGroupMembers(input: GroupMemberInput!): Group
  }
`;
