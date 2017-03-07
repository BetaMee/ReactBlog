//首页的UI样式
export const INDEX_CHANGE_IMG_DEPTH= "INDEX_CHANGE_IMG_DEPTH";
export const INDEX_CHANGE_LOGO1_DEPTH= "INDEX_CHANGE_LOGO1_DEPTH";
export const INDEX_CHANGE_LOGO2_DEPTH= "INDEX_CHANGE_LOGO2_DEPTH";
export const INDEX_CHANGE_LOGO3_DEPTH= "INDEX_CHANGE_LOGO3_DEPTH";

//针对papaer的阴影样式变化
export const IndexChangeImgDepth=(depth)=>{
  return {
    type:INDEX_CHANGE_IMG_DEPTH,
    imgDepth:depth//阴影深度为2
  }
}

export const IndexChangeLogo1Depth=(depth)=>{
  return {
    type:INDEX_CHANGE_LOGO1_DEPTH,
    logo1Depth:depth//阴影深度为2
  }
}

export const IndexChangeLogo2Depth=(depth)=>{
  return {
    type:INDEX_CHANGE_LOGO2_DEPTH,
    logo2Depth:depth//阴影深度为2
  }
}

export const IndexChangeLogo3Depth=(depth)=>{
  return {
    type:INDEX_CHANGE_LOGO3_DEPTH,
    logo3Depth:depth//阴影深度为2
  }
}


//Drawer状态的变化
export const CHANGE_DRAWER_STATUS = "CHANGE_DRAWER_STATUS";

export const DrawerChangeStatus=()=>{
  return {
    type:CHANGE_DRAWER_STATUS
  }
}

//登陆dialog
export const LOGIN_OPEN_DIALOG =　"LOGIN_OPEN_DIALOG";

export const LoginOpenDialog=()=>{
  return {
    type:LOGIN_OPEN_DIALOG
  }
}

//create页Snackbar 状态
export const CREATE_OPEN_SNACKBAR = "CREATE_OPEN_SNACKBAR";

export const CreateOpenSnackbar = ()=>{
  return {
    type:CREATE_OPEN_SNACKBAR
  }
}

export const REMOVE_OPEN_SNACKKBAR = "REMOVE_OPEN_SNACKKBAR";

export const RemoveOpenSnackbar = ()=>{
  return {
    type:REMOVE_OPEN_SNACKKBAR
  }
}