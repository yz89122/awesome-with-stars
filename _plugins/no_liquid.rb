# frozen_string_literal: true

require "jekyll"

Jekyll::Hooks.register :pages, :post_init do |page|
  def page.render_with_liquid?
    false
  end
end

Jekyll::Hooks.register :documents, :post_init do |document|
  def document.render_with_liquid?
    false
  end
end

Jekyll::Hooks.register :posts, :post_init do |post|
  def post.render_with_liquid?
    false
  end
end
