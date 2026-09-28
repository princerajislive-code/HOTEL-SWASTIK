import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { DAY_STAGES } from '../data/hotelData';
import { Clock, Sun, Sunset, Moon, Coffee } from 'lucide-react';

export const DayToNightTimeline: React.FC = () => {
  const { theme } = useTheme();
  const [activeStageId, setActiveStageId] = useState('morning');

  const currentStage = DAY_STAGES.find((s) => s.id === activeStageId) || DAY_STAGES[0];

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'morning':
        return <Sun className="w-4 h-4 text-[#C8A45D]" />;
      case 'afternoon':
        return <Coffee className="w-4 h-4 text-[#C8A45D]" />;
      case 'evening':
        return <Sunset className="w-4 h-4 text-[#C8A45D]" />;
      case 'night':
        return <Moon className="w-4 h-4 text-[#C8A45D]" />;
      default:
        return <Clock className="w-4 h-4 text-[#C8A45D]" />;
    }
  };

  return (
    <section
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#FFFFFF' : '#141416',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              A DAY ON GRAND TRUNK ROAD
            </span>
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 transition-colors duration-500"
            style={{
              color: theme === 'day' ? '#1C1917' : '#F7F3EC',
              textWrap: 'balance',
            }}
          >
            The Rhythm Of <span className="italic font-normal text-[#C8A45D]">Day & Night</span>
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
            style={{
              color: theme === 'day' ? '#57534E' : '#D6D0C5',
            }}
          >
            Follow how our doors open to dawn travelers, offer shade during peak afternoon transit,
            and illuminate the highway in the golden stillness of night.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="mb-12">
          {/* Timeline tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {DAY_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-4 rounded-lg text-left transition-all duration-300 border relative cursor-pointer ${
                    isSelected
                      ? 'border-[#C8A45D] bg-[#C8A45D]/15 shadow-md scale-[1.02]'
                      : theme === 'day'
                      ? 'border-[#E7DECF] bg-[#F7F3EC] hover:border-[#C8A45D]/50'
                      : 'border-[#2B2926] bg-[#1A1A1E] hover:border-[#C8A45D]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C8A45D]">
                      {getStageIcon(stage.id)}
                      {stage.stage}
                    </span>
                    <span className="text-[11px] font-mono text-[#78716C]">
                      {stage.timeRange.split('–')[0]}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-base sm:text-lg transition-colors"
                    style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                  >
                    {stage.title}
                  </h3>

                  {isSelected && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#C8A45D] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Display Panel */}
        <div className="rounded-lg overflow-hidden border border-[#C8A45D]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto bg-neutral-950 overflow-hidden">
              <img
                src={currentStage.image}
                alt={`${currentStage.stage} at Hotel Swastik: ${currentStage.title}`}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#E2CA92] tracking-wider uppercase">
                  {currentStage.timeRange}
                </span>
                <span className="text-[11px] opacity-80 hidden sm:inline">
                  {currentStage.ambience}
                </span>
              </div>
            </div>

            {/* Narrative Column */}
            <div
              className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between transition-colors duration-500 ${
                theme === 'day' ? 'bg-[#F7F3EC]' : 'bg-[#171719]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#C8A45D] mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentStage.stage} Stage</span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-display font-bold mb-3 transition-colors duration-500"
                  style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                >
                  {currentStage.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#C8A45D] mb-6">
                  {currentStage.timeRange}
                </p>

                <p
                  className="text-sm sm:text-base leading-relaxed transition-colors duration-500"
                  style={{ color: theme === 'day' ? '#57534E' : '#D6D0C5' }}
                >
                  {currentStage.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#C8A45D]/20">
                <div className="text-xs text-[#78716C]">
                  <span className="font-medium text-[#C8A45D]">Atmosphere Profile:</span>{' '}
                  {currentStage.ambience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
