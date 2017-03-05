//定义schema级别的插件
export const addCreateAt=(schema,options)=>{
  schema.add({lastMod:Date});
  schema.pre('save',function(next){
    console.log("hh");
    console.log(this);
    this.lastMod = new Date;
    next()
  });

  if(options && options.index){
    schema.path('lastMod').index(options.index);
  }
}

// export const contentToHtml=(schema,options)=>{
//   schema.after('findOne',next=>{
//     console.log("next");
//     next();
//   });
// } 