export function LeaderboardTable({ rows, caption }) {
  return (
    <table className="w-full border border-border font-mono text-sm">
      <caption className="sr-only">{caption}</caption>
      <thead className="bg-white/5 text-xs text-fg-muted uppercase">
        <tr>
          <th scope="col" className="w-14 px-4 py-3 text-left font-medium">#</th>
          <th scope="col" className="px-4 py-3 text-left font-medium">Participant</th>
          <th scope="col" className="px-4 py-3 text-right font-medium">Pts</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ rank, name, points }) => (
          <tr key={rank} className="border-t border-border">
            <td className="px-4 py-3 text-fg-muted">{rank}</td>
            <td className="px-4 py-3">{name}</td>
            <td className="px-4 py-3 text-right font-semibold">{points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
