# frozen_string_literal: true

require "jekyll"

Jekyll::Hooks.register :site, :pre_render do |site|
  readme = site.pages.detect do |page|
    page.name == 'README.md'
  end
  readme.content = readme.content.dup.gsub(/(\.\/.*?\.)md/, '\1html')
end
