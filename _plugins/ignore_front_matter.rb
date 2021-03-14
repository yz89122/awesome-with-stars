# frozen_string_literal: true

require "jekyll"

Jekyll::Hooks.register :site, :post_read do |site|
  markdown_converter ||= site.find_converter_instance(Jekyll::Converters::Markdown)
  site.pages = site.pages.reject do |page|
    markdown_converter.matches(page.ext)
  end
end
