Humid.configure do |config|
  # Name of your webpacker pack file located in `app/javascript/packs/`. You
  # should use a separate pack from your `application.js`.
  #
  # Defaults to "server_rendering.js"
  config.server_rendering_pack = "server_rendering.js"

  # Name of your webpacker pack source map.
  #
  # Defaults to `false`
  config.use_source_map = true

  # Raise errors if JS rendering failed. If false, the error will be
  # logged out to Rails log and Humid.render will return an empty string
  #
  # Defaults to true.
  config.raise_render_errors = Rails.env.development? || Rails.env.test?

  # The logger instance.
  # `console.log` and friends (`warn`, `error`) are delegated to
  # the respective logger levels on the ruby side.
  #
  # Defaults to `Logger.new(STDOUT)`
  config.logger = Rails.logger

  # Options passed to mini_racer.
  #
  # Defaults to empty `{}`.
  config.context_options = {
    timeout: 1000,
    ensure_gc_after_idle: 2000
  }
end

# Common development options
if Rails.env.development? || Rails.env.test?
  # Use single_threaded mode for Spring and other forked envs.
  MiniRacer::Platform.set_flags! :single_threaded

  # If you're using Puma in single mode:
  Humid.create_context
end
