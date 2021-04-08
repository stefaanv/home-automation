import match from 'mqtt-match'

export function translateTopic(topic: string, filter: string, regex: RegExp, replace: string) {
  if (match(filter, topic)) {
    return topic.replace(regex, replace)
  }
}

export function translateTopics(topics: string[], filter: string, regex: RegExp, replace: string) {
  topics.forEach((t) => translateTopic(t, filter, regex, replace))
}
