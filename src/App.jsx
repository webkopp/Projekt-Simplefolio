import './App.css'
import CardItem from './assets/components/carditem/CardItem'
import Haupt from './assets/components/haupt/Haupt'
import Info from './assets/components/info/Info'
import ListItem from './assets/components/listitem/ListItem'
import Nav from './assets/components/nav/Nav'
import SkillListItem from './assets/components/skilllistitem/SkillListItem'
import SkillsItem from './assets/components/skillsitem/SkillsItem'

function App() {

  return (
    <>
      <Nav />
      <Haupt />
      <Info />
      <CardItem />
      <ListItem />
      <SkillsItem />
      <SkillListItem />
    </>
  )
}

export default App
