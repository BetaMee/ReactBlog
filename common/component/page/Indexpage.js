const styles={
  //第一屏
  indexLayout:{
    height:"500px",

    display:"flex",
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems:"center",
    backgroundColor:"#FAFAFA"    
  },
  avatar:{
    width:"100%",
    borderRadius:"50%"
  },

  avatarContainer:{
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  indexButton:{
    color:"#4FC3F7"
  },
  siteIntro:{
    // width:"100%"
  },
  //第二屏
  indexIntro:{
    height:"300px",
    backgroundColor:"#E3F2FD",
    color:"#64B5F6",

    display:"flex",
    flexDirection:'row',
    alignItems:"center",
    justifyContent: "center",
  },

  //第三屏
  indexLink:{
    height:"500px",
    backgroundColor:"#FAFAFA",

    display:"flex",
    alignItems:"center",
    justifyContent: "center",

  },
  indexPicContainer:{
    display:"flex",
    flexDirection:'row',
    alignItems:"center",
    justifyContent: "center",
    width:"80%"
  },
  indexPic:{
    width:"100%",  
    margin:"10px"
  },
  Pic:{
    width:"100%",
    height:"100%"
  }

};

export default styles;