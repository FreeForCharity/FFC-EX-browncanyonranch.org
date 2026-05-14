import React from 'react'

const Mission: React.FC = () => {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="bg-paper-deep">
      <div className="bcr-container py-20 md:py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
            Our Mission
          </p>
          <h2
            id="mission-heading"
            className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[1.8rem] md:text-[2.1rem] leading-[1.15]"
          >
            A living record of ranching life in Southern Arizona.
          </h2>
        </div>
        <div className="md:col-span-8 bcr-prose">
          <p>
            The Friends of Brown Canyon Ranch is a group of volunteers dedicated to the preservation
            and interpretation of Brown Canyon Ranch — a historic ranch situated in the pristine
            foothills of the Huachuca Mountains in Southern Arizona.
          </p>
          <p>
            The adobe ranch house was built around 1905–1907 by James Haverty and was the first
            dwelling in the East Huachucas to have running water. The property became part of the
            Coronado National Forest in 1998 through a land exchange led by Sarah Barchas.
          </p>
          <p>
            Today we host school children, neighbors, and travelers — sharing the ranch&apos;s
            architecture, landscape, and the families who shaped it.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mission
