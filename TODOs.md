# TODOs

## clean code

- [x] move handle functions inside class -> clean code, follow oop (no stinky code allowed)
- [] refactor search component
- [] refactor types, each one in a separate file
- [] work with initialized objects instead of interfaces in frontend?

## must have

- [] collect game data (projectiles, cast time, etc.)
- [x] stackable effects
- [x] stackable dot effect
- [x] implement number of projectiles
- [x] implement projectile travel speed
- [x] handle cast animations logic better (add global cast time)
- [] TODO: implement evo tree
- [] implement new target (ditto: target with evo tree)
- [] implement runes
- [] implement seekers

## should have

- [x] clear button for search
- [x] fix graph (handle multiple dots on the same position)
- [x] changelog on entry page
- [x] unselect all selected agents button
- [] teamfinder: results on separate page / calculate on click
- [] new detail view: agent detail view where you can adjust stats with instant graph update, also select support agents but graph shows only selected agent
- [] fill changelog with content

## nice to have

- [x] UI overhaul with graphs to customize selected agents on the fly => result will update on change
- [x] better tooltip for graph (show action name, time, damage...)
- [x] frontend: select 20 agents and bruteforce best combination
- [x] show results from teamfinder
- [x] improve logging
- [x] switch from localstorage to idx
- [x] move calculation to web worker (teamfinder blocks event loop)
- [x] sort table by damage
- [x] sticky search bar (scrolls with)
- [x] agent skill/bio inside modal (tabs: bio/stats/skill)

## UI/UX

- [] adjust width/height of graph

## code changes

- [x] add projectile number
- [x] add cast time
- [x] log damage events (is_crit, is_headshot, nodes etc)
- [] TODO: replace atoms with real data => firebase
- [] refactor stuff again (atoms needed? try useState for short persistency?)

## feedback

- [x] /calculator with demo result (pre selected agent(s) and target)
- [x] edit button in table or in sidebar to adjust agents on the fly
- [x] reset button resets also edited agents
- [x] update result on every change (agent / target) => no calculate button needed
- [x] filtered agents not updated when changing view/route (search reset but not filtered agents)
- [x] placeholder and or tooltip info for agent edit modal (crit rate 1 = 100%, 0.80 = 80%)
- [x] chrome => modal not opening with one click, needs two clicks
- [x] reset filter when changing route or separate them
- [x] remove projectile number / skill cast time from edit modal
