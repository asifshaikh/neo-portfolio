import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">Experience</h2>

      {PAST_ROLES.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="font-heading text-lg sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mt-0.5 mb-4 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed">
              {role.description
                .split('\n')
                .filter(Boolean)
                .map((item, index) => (
                  <li
                    key={`${role.company}-${index}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
