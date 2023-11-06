import type { Schema, Attribute } from '@strapi/strapi';

export interface MediaSingleImage extends Schema.Component {
  collectionName: 'components_media_single_images';
  info: {
    displayName: 'single image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    format: Attribute.Enumeration<['small', 'medium', 'fullscreen']>;
  };
}

export interface MediaVideo extends Schema.Component {
  collectionName: 'components_media_videos';
  info: {
    displayName: 'video';
    icon: 'play';
  };
  attributes: {
    video: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'media.single-image': MediaSingleImage;
      'media.video': MediaVideo;
    }
  }
}
