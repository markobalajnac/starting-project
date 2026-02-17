import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export function CoreConepets() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
        {/* <CoreConcept
                      title={CORE_CONCEPTS[0].title}
                      description={CORE_CONCEPTS[0].description}
                      image={CORE_CONCEPTS[0].image}
                    /> */}
      </ul>
    </section>
  );
}
