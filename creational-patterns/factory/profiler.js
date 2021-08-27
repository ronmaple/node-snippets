/**
 * Factory creational design pattern *example is irrelevant*
 * simple profiler - logs benchmarks, but disable when production
 */
class Profiler {
  constructor(label) {
    this.label = label
    this.lastTime = null
  }
  start() {
    this.lastTime = process.hrtime()
  }
  end() {
    const diff = process.hrtime(this.lastTime)
    console.log(`Timer "${this.label}" took ${diff[0]} seconds ` + `and ${diff[1]} nanoseconds.`)
  }
}

const noopProfiler = {
    start() {},
    end() {},
}

export function createProfiler (label) {
    const isDebug = process.env.NODE_ENV === 'production'
    if (isDebug) return noopProfiler
    return new Profiler(label)
}