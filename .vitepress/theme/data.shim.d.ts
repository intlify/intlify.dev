declare module './layout.data.js' {
  type Model = {
    title: string
    link: string
    logo: string
  }
  interface Project extends Model {}
  type Data = {
    projects: Project[]
  }
  const data: Data = {}
  export { data }
}

export {}
