import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import { Events } from "@/pages/events";
import { Blog } from "@/pages/blog";
import { BlogPost1 } from "@/pages/blog-post-1";
import { BlogPost2 } from "@/pages/blog-post-2";
import { BlogPostTheWillOfGod } from "@/pages/the-will-of-god";
import { BlogPostACallToEffectiveService } from "@/pages/a-call-to-effective-service";
import { BlogPostRunningWithTheVision } from "@/pages/running-with-the-vision";
import { BlogPostTheHealingWord } from "@/pages/the-healing-word";
import { BlogPostThePresentShepherd } from "@/pages/the-present-shepherd";
import { BlogPostJesusTheGreatShepherdPt2 } from "@/pages/jesus-the-great-shepherd-pt-2";
import { BlogPostJesusTheGreatShepherd } from "@/pages/jesus-the-great-shepherd";
import { BlogPostThePriesthoodOfChrist } from "@/pages/the-priesthood-of-christ";
import { BlogPostThePowerOfTheWordAndTheLordshipOfChrist } from "@/pages/the-power-of-the-word-and-the-lordship-of-christ";
import { BlogPostWalkingInTheSpiritPart3 } from "@/pages/walking-in-the-spirit-part-3";
import { BlogPostWalkingInTheSpiritPart2 } from "@/pages/walking-in-the-spirit-part-2";
import { BlogPostWalkingInTheSpirit } from "@/pages/walking-in-the-spirit";
import { BlogPostTheLordsVictoryAtTheHandsOfAWoman } from "@/pages/the-lords-victory-at-the-hands-of-a-woman";
import { BlogPostTheHeadshipOfChrist } from "@/pages/the-headship-of-christ";
import { BlogPostThePropagationOfTheMessiah } from "@/pages/the-propagation-of-the-messiah";
import { BlogPostQualitiesOfAFaithfulServant } from "@/pages/qualities-of-a-faithful-servant";
import { BlogPostTheChurchAndItsInfluence } from "@/pages/the-church-and-its-influence";
import { BlogPostThe5PhasesOfSonship } from "@/pages/the-5-phases-of-sonship";
import { BlogPostThePowerOfAPrayingGeneration } from "@/pages/the-power-of-a-praying-generation";
import { BlogPostThreeDimensionsOfGodsPresence } from "@/pages/three-dimensions-of-gods-presence";
import { BlogPostGodlyFatherhood } from "@/pages/godly-fatherhood";
import { BlogPostPredestination } from "@/pages/predestination";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/blog" component={Blog} />
        <Route path="/the-power-and-value-of-a-family-part-2" component={BlogPost1} />
        <Route path="/the-power-and-value-of-a-family" component={BlogPost2} />
        <Route path="/the-will-of-god" component={BlogPostTheWillOfGod} />
        <Route path="/a-call-to-effective-service" component={BlogPostACallToEffectiveService} />
        <Route path="/running-with-the-vision" component={BlogPostRunningWithTheVision} />
        <Route path="/the-healing-word" component={BlogPostTheHealingWord} />
        <Route path="/the-present-shepherd" component={BlogPostThePresentShepherd} />
        <Route path="/jesus-the-great-shepherd-pt-2" component={BlogPostJesusTheGreatShepherdPt2} />
        <Route path="/jesus-the-great-shepherd" component={BlogPostJesusTheGreatShepherd} />
        <Route path="/the-priesthood-of-christ" component={BlogPostThePriesthoodOfChrist} />
        <Route path="/the-power-of-the-word-and-the-lordship-of-christ" component={BlogPostThePowerOfTheWordAndTheLordshipOfChrist} />
        <Route path="/walking-in-the-spirit-part-3" component={BlogPostWalkingInTheSpiritPart3} />
        <Route path="/walking-in-the-spirit-part-2" component={BlogPostWalkingInTheSpiritPart2} />
        <Route path="/walking-in-the-spirit" component={BlogPostWalkingInTheSpirit} />
        <Route path="/the-lords-victory-at-the-hands-of-a-woman" component={BlogPostTheLordsVictoryAtTheHandsOfAWoman} />
        <Route path="/the-headship-of-christ" component={BlogPostTheHeadshipOfChrist} />
        <Route path="/the-propagation-of-the-messiah" component={BlogPostThePropagationOfTheMessiah} />
        <Route path="/qualities-of-a-faithful-servant" component={BlogPostQualitiesOfAFaithfulServant} />
        <Route path="/the-church-and-its-influence" component={BlogPostTheChurchAndItsInfluence} />
        <Route path="/the-5-phases-of-sonship" component={BlogPostThe5PhasesOfSonship} />
        <Route path="/the-power-of-a-praying-generation" component={BlogPostThePowerOfAPrayingGeneration} />
        <Route path="/three-dimensions-of-gods-presence" component={BlogPostThreeDimensionsOfGodsPresence} />
        <Route path="/godly-fatherhood" component={BlogPostGodlyFatherhood} />
        <Route path="/predestination" component={BlogPostPredestination} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
