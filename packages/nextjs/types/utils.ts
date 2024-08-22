export type Tuple<T, MaxLength extends number = 10, Current extends T[] = []> = Current["length"] extends MaxLength
  ? Current
  : Current | Tuple<T, MaxLength, [T, ...Current]>;

export interface LensProfile {
  id: string;
  name: string;
  bio: string;
  picture: string;
  coverPicture: string;
  attributes: Attribute[];
}

export interface Attribute {
  type: string;
  key: string;
  value: string;
}

export interface PostEncode {
  __typename: string;
  postParams_contentURI: string;
}

export interface Post {
  description: string;
  external_url: string;
  name: string;
  animation_url: string;
  $schema: string;
  lens: {
    id: string;
    appId: string;
    locale: string;
    mainContentFocus: string;
    image: {
      item: string;
      type: string;
    };
    title: string;
    content: string;
    attachments: Array<{
      item: string;
      type: string;
      cover: string;
    }>;
  };
}

export interface Follower {
  followerProfileId: string;
}
