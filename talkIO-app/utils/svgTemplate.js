function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })

  return typeScriptTpl.ast`
  ${imports}

  const ${componentName} = <T extends object=object>(props: React.SVGProps<SVGSVGElement> & T) => ${jsx};

  ${exports};
`
}

module.exports = template