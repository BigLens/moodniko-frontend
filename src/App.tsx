import Layout from './components/Layout'
import Hero from './components/Hero'
import ContentRecommendations from './components/ContentRecommendations'
import MoodTracker from './components/MoodTracker'
import Stats from './components/Stats'

const App = () => {
  return (
    <Layout>
      <Hero />
      <ContentRecommendations />
      <MoodTracker />
      <Stats />
    </Layout>
  )
}

export default App