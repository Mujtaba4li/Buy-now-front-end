export default {
    name: "banner",
    type: "document",
    title: "Banner",
    fields: [
      {
        name: "image",
        type: "image",
        title: "Image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "buttonText",
        type: "string",
        title: "ButtonText",
      },
      {
        name: "product",
        title: "Product",
        type: "string",
       
      },
      {
          name:'desc',
          title:'Desc',
          type:'string'
      },
      {
          name:'smallText',
          title:'SmallText',
          type:'string'
      },
      {
          name:'midText',
          title:'MidText',
          type:'string'
      },
      {
          name:'largeText',
          title:'large Text',
          type:'string'
      },
      {
          name:'discount',
          title:'Discount',
          type:'string'
      },
      {
          name:'saleTime',
          title:'Sale Time',
          type:'string'
      },
  
    ],
  };
  