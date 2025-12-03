import React, { useState } from 'react';
import { BookOpen, Feather, Users, Flame, Shield, FileText, Heart, Star } from 'lucide-react';

const RizalFlowchart = () => {
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    {
      id: 'A',
      title: 'CHILDHOOD AND EARLY INFLUENCES',
      period: '1861-1872',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-600',
      bgColor: 'bg-emerald-50',
      content: {
        'Key People': 'Mother Teodora Alonso (first teacher), Brother Paciano (revolutionary influence), Father Francisco Paula de Sanchez (liberal Jesuit mentor)',
        'Formative Environments': 'Calamba (agrarian oppression and social inequality), Biñan (early formal education), Ateneo de Manila (Jesuit educational excellence)',
        'Critical Incidents': 'Mother\'s unjust imprisonment by Spanish authorities, Execution of GOMBURZA priests in 1872',
        'Significance': 'These experiences instilled early awareness of social injustice, colonial oppression, and the need for systemic reform, forming the foundation of his patriotic consciousness.'
      }
    },
    {
      id: 'B',
      title: 'SA AKING MGA KABABATA',
      period: 'Circa 1869',
      icon: Feather,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-600',
      bgColor: 'bg-amber-50',
      content: {
        'Context': 'Composed at approximately eight years of age during his formative years in Calamba',
        'Central Thesis': 'The poem declares that one who does not love his own language is worse than a beast and a putrid fish',
        'Ideological Significance': 'Represents Rizal\'s earliest articulation of linguistic nationalism, establishing language as the foundation of cultural identity and national dignity',
        'Evolution': 'Marks the transition from passive observation of colonial injustice to active assertion of Filipino cultural pride and distinctiveness'
      }
    },
    {
      id: 'C',
      title: 'A LA JUVENTUD FILIPINA',
      period: '1879',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50',
      content: {
        'Historical Context': 'Written at age 18 while studying at the University of Santo Tomas, winning first prize in a literary contest',
        'Core Message': 'A call to Filipino youth to cultivate their intellectual faculties, artistic talents, and scientific knowledge as instruments of national progress',
        'Ideological Framework': 'Education and intellectual development are positioned as the primary mechanisms for achieving national redemption and social transformation',
        'Developmental Shift': 'Expands from cultural nationalism (language) to intellectual nationalism (education as liberation)'
      }
    },
    {
      id: 'D',
      title: 'THE ELIAS NARRATIVE',
      period: 'Noli Me Tangere, 1887',
      icon: Flame,
      color: 'from-red-500 to-rose-600',
      borderColor: 'border-red-600',
      bgColor: 'bg-red-50',
      content: {
        'Character Analysis': 'Elias represents the radical, revolutionary approach to colonial resistance, believing armed struggle is necessary for liberation',
        'Ideological Position': 'Advocates for violent overthrow of the colonial system, arguing that peaceful reform is insufficient given the depth of oppression',
        'Symbolic Death': 'Elias dies in the forest, representing both the nobility of revolutionary sacrifice and the tragic futility of premature armed resistance',
        'Rizal\'s Ambivalence': 'Through this character, Rizal acknowledges the legitimacy of revolutionary sentiment while not yet fully endorsing violent methods'
      }
    },
    {
      id: 'E',
      title: 'CONCLUSION OF EL FILIBUSTERISMO',
      period: '1891',
      icon: Heart,
      color: 'from-purple-500 to-violet-600',
      borderColor: 'border-purple-600',
      bgColor: 'bg-purple-50',
      content: {
        'Narrative Context': 'Father Florentino delivers a philosophical discourse over the body of Simoun, the failed revolutionary',
        'Conditions for Revolution': 'Revolution will only succeed when: (1) oppression becomes unbearable, (2) the cause remains morally pure, (3) violence becomes the only remaining option',
        'Theory of Change': 'Genuine reform must emerge either from enlightened governance or from an educated, unified populace, not from violent conspiracy',
        'Ideological Maturation': 'Reflects a darker, more complex understanding of revolution while maintaining emphasis on moral and educational prerequisites'
      }
    },
    {
      id: 'F',
      title: 'LETTER TO THE YOUNG WOMEN OF MALOLOS',
      period: '1889',
      icon: FileText,
      color: 'from-pink-500 to-rose-600',
      borderColor: 'border-pink-600',
      bgColor: 'bg-pink-50',
      content: {
        'Historical Context': 'Written to honor twenty Filipino women who defied Spanish friars to establish a night school',
        'Critique of Clerical Power': 'Condemns friar control over education and Filipino consciousness, describing it as tyranny concealed by religious authority',
        'Advocacy for Women': 'Arguments that educated, empowered women are essential for national progress, as they shape future generations',
        'Ideological Expansion': 'Broadens nationalist framework to include gender equality and women\'s liberation as integral to national independence'
      }
    },
    {
      id: 'G',
      title: 'LA LIGA FILIPINA',
      period: '1892',
      icon: Shield,
      color: 'from-orange-500 to-amber-600',
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50',
      content: {
        'Organizational Structure': 'Civic association with provincial councils (Consejo Supremo) designed to coordinate reform efforts across the archipelago',
        'Stated Objectives': 'Unite the Filipino people, provide mutual protection and assistance, defend against injustice, promote education and economic development',
        'Methodological Approach': 'Strictly non-violent and reformist, emphasizing collective action and peaceful civil society organization',
        'Historical Outcome': 'Dissolved after only one meeting due to Rizal\'s immediate arrest and exile to Dapitan, though it inspired subsequent revolutionary organizations'
      }
    },
    {
      id: 'H',
      title: 'MI ÚLTIMO ADIÓS',
      period: '1896',
      icon: Star,
      color: 'from-gray-600 to-slate-800',
      borderColor: 'border-gray-900',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      content: {
        'Composition': 'Written on the eve of his execution, concealed in an alcohol lamp, and later recovered by his family',
        'Ultimate Sacrifice': 'Expresses willingness to die for the Philippines, transforming personal death into an act of national consecration',
        'Symbolic Language': 'References the Philippines as "Pearl of the Orient" and envisions his blood nourishing the soil of freedom',
        'Legacy': 'Martyrdom completes his transformation from reformist intellectual to immortal symbol of Filipino nationalism and resistance'
      }
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
              <Star className="text-white w-10 h-10" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            JOSÉ RIZAL
          </h1>
          <p className="text-2xl text-slate-300 font-light mb-6">
            Ideological Evolution and the Path to National Consciousness
          </p>
          <div className="flex justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="text-slate-200 font-medium">Conceptual Roadmap</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="text-slate-200 font-medium">1861 - 1896</span>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            const isDark = stage.id === 'H';
            
            return (
              <div key={stage.id} className="relative">
                {/* Connecting line */}
                {index < stages.length - 1 && (
                  <div className="absolute left-12 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-slate-400 to-slate-600 z-0"></div>
                )}
                
                {/* Stage Card */}
                <div
                  className={`relative transform transition-all duration-300 ${isActive ? 'scale-[1.02]' : ''}`}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  onMouseLeave={() => setActiveStage(null)}
                >
                  <div className={`${stage.bgColor} ${isDark ? 'bg-gray-900' : ''} border-l-8 ${stage.borderColor} rounded-r-xl shadow-xl backdrop-blur-lg relative overflow-hidden`}>
                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stage.color} opacity-5`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-6 pb-6 border-b-2 border-slate-200">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="text-white w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-2xl font-bold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {stage.id}.
                            </span>
                            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                              {stage.title}
                            </h2>
                          </div>
                          <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
                            {stage.period}
                          </p>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="space-y-5">
                        {Object.entries(stage.content).map(([key, value]) => (
                          <div key={key} className={`${isDark ? 'bg-slate-800/50' : 'bg-white/60'} backdrop-blur-sm rounded-lg p-5 border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                            <h4 className={`text-sm uppercase font-bold mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'} tracking-wide`}>
                              {key}
                            </h4>
                            <p className={`${isDark ? 'text-slate-200' : 'text-slate-700'} leading-relaxed text-base`}>
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Evolution Indicator */}
                      {index < stages.length - 1 && (
                        <div className="mt-6 flex items-center justify-center">
                          <div className={`${isDark ? 'bg-slate-700' : 'bg-white'} px-6 py-2 rounded-full border-2 ${stage.borderColor} shadow-md`}>
                            <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'} font-semibold text-sm tracking-wider`}>
                              IDEOLOGICAL PROGRESSION
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flow Logic Analysis */}
        <div className="mt-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-10 border-2 border-slate-600 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Flow Logic and Coherence
          </h3>
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600">
              <h4 className="font-bold text-amber-400 text-lg mb-3">Phase I: Foundation and Cultural Assertion</h4>
              <p className="text-slate-300 leading-relaxed">
                From childhood experiences of injustice to the articulation of linguistic nationalism in "Sa Aking mga Kababata," 
                Rizal establishes the fundamental premise that Filipino identity must be grounded in cultural distinctiveness and language pride.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600">
              <h4 className="font-bold text-blue-400 text-lg mb-3">Phase II: Intellectual Awakening and Revolutionary Consciousness</h4>
              <p className="text-slate-300 leading-relaxed">
                "A La Juventud Filipina" expands the nationalist project to encompass intellectual development, while the Elias character 
                in Noli Me Tangere introduces the revolutionary alternative to peaceful reform, marking Rizal's growing awareness of 
                multiple paths to liberation.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600">
              <h4 className="font-bold text-purple-400 text-lg mb-3">Phase III: Radicalization and Inclusive Liberation</h4>
              <p className="text-slate-300 leading-relaxed">
                The conclusion of El Filibusterismo articulates more radical conditions for revolution, while the Letter to the Young Women 
                of Malolos extends the nationalist framework to include gender equality, demonstrating that true liberation must encompass all sectors of society.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600">
              <h4 className="font-bold text-rose-400 text-lg mb-3">Phase IV: Political Action and Ultimate Sacrifice</h4>
              <p className="text-slate-300 leading-relaxed">
                La Liga Filipina represents the transition from theoretical writing to concrete political organization. When this peaceful 
                effort fails, Mi Último Adiós transforms Rizal's execution into the ultimate patriotic act, ensuring his martyrdom would 
                inspire the revolution he had intellectually prepared but never led.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Clarity Section */}
        <div className="mt-12 bg-white rounded-xl p-10 border-2 border-slate-300 shadow-2xl">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Visual Organization and Design
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-700 text-xl mb-4">Structural Elements</h4>
              <div className="space-y-3 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Chronological progression with clear temporal markers</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Color-coded thematic stages for visual differentiation</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Icon system representing the nature of each developmental phase</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Border emphasis indicating transition points</span>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-700 text-xl mb-4">Content Organization</h4>
              <div className="space-y-3 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Hierarchical information architecture with clear categorization</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Explicit articulation of significance for each element</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Visual connection indicators showing ideological development</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-bold text-slate-800">•</span>
                  <span>Professional academic presentation standards</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-slate-700 to-slate-900 p-8 rounded-xl shadow-2xl border-2 border-slate-600">
            <p className="text-xl text-slate-300 italic leading-relaxed max-w-3xl">
              "The youth is the hope of our fatherland. The country's future will be in their hands, 
              and it is our duty to cultivate in them the virtues that will make them worthy of that trust."
            </p>
            <p className="text-slate-400 mt-4 font-medium">José Rizal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RizalFlowchart;