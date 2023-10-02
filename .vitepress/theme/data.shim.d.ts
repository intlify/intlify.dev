declare module './layout.data.js' {
  type Model = {
    title: string
    link: string
    logo: string
  }
  interface Project extends Model {}
  interface Sponsor extends Model {}
  type Data = {
    projects: Project[]
    sponsors: {
      platinum: Sponsor[]
      special: Sponsor[]
      gold: Sponsor[]
      sliver: Sponsor[]
      bronze: Sponsor[]
    }
  }
  const data: Data = {}
  export { data }
}

export {}
