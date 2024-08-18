import { Motorcycle } from "../entities/motorcycle.entity";

export class MotorcycleMock extends Motorcycle {
  name = 'Himalayan';
  type = {
    name: "vehicle",
    uuid: "a76439fc-29fa-4a4e-9faa-6cee7072bbc5"
  };
  uid = null;
  seller = {
    name: 'Lema Motors',
    uuid: '83f13eec-e88a-4883-a849-fb7d65031f24',
    metadata: null
  };
  slug = 'lema-motors-royal-enfield-himalayan';
  metadata = null;
  uuid = 'e5bbdf04-1380-4ac3-9e6b-8d96be3ed40d';
  brand = {
    name: 'Royal Enfield',
    uuid: '8fd40850-36a7-45de-8ebd-844fe1c45457'
  };
  used = false;
  featured = true;
  favourite = false;
  //links = [];
  //seo = null;
  //images = [];
  categories = [
    {
      name: "Motos",
      locale: "es",
      uuid: "3b7509f0-1c2a-42d2-b4e6-ac23cebba737"
    }
  ];
  //accessories = [];
  //services = [];
  //similar_to = [];
  //tags = [];
  variants = [
    {
      name: 'PINE GREEN',
      slug: null,
      uid: null,
      externalId: 'LEM-0008',
      uuid: '9bd9ff70-24cd-4922-b5d6-1a568f830a9a',
      used: null,
      featured: false,
      favourite: false,
      main: false,
      metadata: null,
      links: [],
      seo: null,
      images: [
        {
          id: 9510,
          name: 'large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp',
          alternativeText: null,
          caption: null,
          width: 472,
          height: 265,
          formats: {
            thumbnail: {
              ext: '.webp',
              url: 'https://bucket-rn-40-dev-test.s3.amazonaws.com/thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp',
              hash: 'thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18',
              mime: 'image/webp',
              name: 'thumbnail_large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp',
              path: null,
              size: 64.76,
              width: 245,
              height: 138
            }
          },
          hash: 'large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18',
          ext: '.webp',
          mime: 'image/webp',
          size: 138.19,
          url: 'https://bucket-rn-40-dev-test.s3.amazonaws.com/large_3e3e59c3_195d_4e28_89b3_bcb9ebc4d95f_fb415b4c18.webp',
          previewUrl: null,
          provider: 'to-s3-with-webp',
          provider_metadata: null,
          view_type: 'cover',  // Add the missing property here
          type: 'inventory',
          uuid: null
        }
      ],
      prices: [
        {
          amount: 5699,
          currency: 'USD',
          purpose: 'Retail Price',
          uuid: 'f82756bf-74ad-44f7-810d-988471825927'
        }
      ],
      details: null/*  {
        years: [
          {
            value: '2022',
            description: null,
            extra: null
          }
        ],
        motors: [
          {
            value: '648cc',
            description: null,
            extra: null
          }
        ],
        features: [
          {
            value:  'Potencia máxima: 47 Hp @7250 RPM',
            description: null,
            extra: null
          },
          {
            value: 'Motor bicilíndrico, 4 tiempos, refrigerado por aire, Encendido digital - TCI, 648 cc',
            description: null,
            extra: null
          }
        ],
        fuel_types: [
          {
            value: 'n/a',
            description: null,
            extra: null
          }
        ],
        doors: [
          {
            value: 'n/a',
            description: null,
            extra: null
          }
        ],
        transmissions: [
          {
            value: 'n/a',
            description: null,
            extra: null
          }
        ],
        body_types: [
          {
            value: 'Motos',
            description: null,
            extra: null
          }
        ],
        testdrive: [
          {
            value: 'false',
            description: null,
            extra: null
          }
        ],
        kilometers: [
          {
            value: '0',
            description: null,
            extra: null
          }
        ],
        description: [
          {
            value: '',
            description: null,
            extra: null
          }
        ]
      } */,
      tags: [],
      stock: 0
    }
  ];
}
