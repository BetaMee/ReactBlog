

export const GET_TITLE_INPUT = 'GET_TITLE_INPUT';
export const GET_CONTENT_INPUT = 'GET_CONTENT_INPUT';


export const GetTitleInput = (title)=>{
  return {
    type:GET_TITLE_INPUT,
    title:title
  }
}

export const GetContentInput = (content)=>{
  return {
    type:GET_CONTENT_INPUT,
    content:content
  }
}